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

  const handleDeleteBook = (id: string) => {
    setBookList(prevData => {
      return [...prevData.filter(data => data.id != id)]
    })
  }

  const handleGetUpdate = (id: string) => {
    console.log(id);
  }


  return (
    <div className="container">
      <h1 className="text-primary mt-5 mb-5">Book Management System</h1>

      <div className="row">
      <div className="col-6">
        <BookControl onAdd={handleAddBook} />
        </div>
        <div className="col-6">
        <BookConsole list={bookList} onDelete={handleDeleteBook} onGetUpdate={handleGetUpdate}/>
        </div>
      </div>



    </div>
  );
}

export default App;
