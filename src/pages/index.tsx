import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


export default function Home() {

  const [books, setBooks] : [books:[], setBooks:Function] = useState([]);

  const deleteBookById= (id:number)=>{
    const updatedBooks = books.filter((book:{id:number;title:string})=>{
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = (title : string) => {
    const updatedBooks : { id: number; title: string}[] = [
      ...books, {
        id: Math.round(Math.random()*999),
        title: title
        }
    ];
    setBooks(updatedBooks);
  };

  const editBookById = (id:number, newTitle:string) => {
      const updatedBooks = books.map((book:{id:number;title:string})=>{
        if(book.id === id){
          return {...book, title: newTitle};
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
