
import { createContext, useState } from "react";
import axios from "axios";


const BooksContext = createContext({});

function Provider({children}:{children:any}){


    const [books, setBooks] : [books:[], setBooks:Function] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  }
  const deleteBookById= async (id:number)=>{

    await axios.delete(`http://localhost:3001/books/${id}`)

    const updatedBooks = books.filter((book:{id:number;title:string})=>{
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title : string) => {

    const response = axios.post("http://localhost:3001/books",{
      title
    });

    
    const updatedBooks : { id: number; title: string}[] = [
      ...books,
      (await response).data
    ];
    setBooks(updatedBooks);
  };

  const editBookById = async (id:number, newTitle:string) => {

      const response = await axios.put(`http://localhost:3001/books/${id}`, {
        title: newTitle
      });

      const updatedBooks = books.map((book:{id:number;title:string})=>{
         if(book.id === id){
          return {...book, ...response.data};
         }

         return book;
       });

       setBooks(updatedBooks);
  };


   

    const valueToShare : any = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks

    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export default BooksContext;
export { Provider };