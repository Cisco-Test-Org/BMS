import { useState } from "react";
import BookConsole from "./components/BookConsole";
import BookControl from "./components/BookControl";
import BOOK_LIST from "./db/BookList";
import Book from "./model/Book";

const App = () => {

  const [bookList, setBookList] = useState(BOOK_LIST)

  const handleAddBook = (book: Book): void =>{
    setBookList(prevData => {
      return [...prevData, book]
    })
  }

  return (
    <div className="container">
      <h1 className="text-primary mt-5 mb-5">Book Management System</h1>
      <BookControl onAdd={handleAddBook}/>
      <BookConsole list={bookList}/>
    </div>
  );
}

export default App;
