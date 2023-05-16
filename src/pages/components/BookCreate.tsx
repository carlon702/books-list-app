import { useState} from "react";
import useBooksContext from "@/hooks/booksContextHook";

function BookCreate(){

    const [title, setTitle] = useState("");

    const {createBook}:any = useBooksContext();

    const handleChange = (e : any) => {
        
            setTitle(e.target.value)

        }

    const handleSubmit = (e : any) => {
        e.preventDefault();
        createBook(title);
        setTitle("");
    }
    

    return (
    <div className="book-create">
        <h3>Add A Book</h3>
        <form onSubmit={handleSubmit}>
            <label className="label">Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button">Create Book</button>
        </form>
    </div>
    );
}

export default BookCreate;