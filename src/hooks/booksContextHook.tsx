import { useContext } from "react";
import BooksContext from "@/pages/context/books";


function useBooksContext() {
    return useContext(BooksContext);
}

export default useBooksContext;