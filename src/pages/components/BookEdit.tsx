import { useState } from "react";
import useBooksContext from "@/hooks/booksContextHook";


function BookEdit({book, onSubmit}:{book:{id:number;title:string}, onSubmit:Function}){

    const [title, setTitle] = useState(book.title);

    const {editBookById} : any = useBooksContext();



    const handleChange = (e:any) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        onSubmit();
        editBookById(book.id, title);

    }


    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button is-primary"> Save </button>
    </form>
    }

export default BookEdit;