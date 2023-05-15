import { useState } from "react";



function BookEdit({book, onSubmit}:{book:{id:number;title:string}, onSubmit:Function}){

    const [title, setTitle] = useState(book.title);

    const handleChange = (e:any) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();

        onSubmit(book.id, title)

    }


    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button is-primary"> Save </button>
    </form>
    }

export default BookEdit;