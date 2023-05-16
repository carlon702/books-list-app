import BookShow from "./BookShow";
import useBooksContext from "@/hooks/booksContextHook";




function BookList(){
    
    
    const { books } : any = useBooksContext();


    const renderBooks = books.map((book:any)=>{
        return <BookShow key={book.id} book={book} />
    })
    
    
    return <div className="book-list">

        {renderBooks}

    </div>
}

export default BookList;