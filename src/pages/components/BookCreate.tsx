import { useState } from "react";

function BookCreate({onSubmit}:{onSubmit:Function}){

    const [title, setTitle] = useState("");

    const handleChange = (e : any) => {
        
            setTitle(e.target.value)

        }

    const handleSubmit = (e : any) => {
        e.preventDefault();
        onSubmit(title);
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