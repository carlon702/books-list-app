import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";


export default function Home() {

  const [books, setBooks] : [books:[], setBooks:Function] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  }

  useEffect(()=>{
    fetchBooks();
  }, []);

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
          return {...book, ...response};
         }

         return book;
       });

       setBooks(updatedBooks)
  };



  return (
    <div className="app">
      <h1>Reading List</h1>
      
    <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
    <BookCreate onSubmit={createBook} />
    </div>
  )
}
