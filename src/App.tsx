import { useState } from "react";
import BookConsole from "./components/BookConsole";
import BookControl from "./components/BookControl";
import BOOK_LIST from "./db/BookList";
import Book from "./model/Book";

const App = () => {

  const [bookList, setBookList] = useState(BOOK_LIST)
  const [updateBook, setUpdateBook] = useState<Book>({id: '', name: '', author: '', pages: 0})

  const handleAddBook = (book: Book): void =>{

    const id = bookList.findIndex(index => index.id === book.id)
    if(id){
      const newList = [...bookList]
      newList[id] = {id: id.toString(), name: book.name, author: book.author, pages: book.pages}
      setBookList(newList)
    }else{
      setBookList(prevData => {
        return [...prevData, book]
      })
    }
  }

  const handleDeleteBook = (id: string) => {
    setBookList(prevData => {
      return [...prevData.filter(data => data.id != id)]
    })
  }

  const handleUpdateSet = (id: string) => {
    const book: Book | any = bookList.find(b => b.id === id)    
    setUpdateBook({id: id, name: book.name, author: book?.author, pages: book.pages})    
  }

  return (
    <div className="container">
      <h1 className="text-primary mt-5 mb-5">Book Management System</h1>
      <BookControl onAdd={handleAddBook} updates={updateBook}/>
      <BookConsole list={bookList} onDelete={handleDeleteBook} onUpdateSet={handleUpdateSet}/>
    </div>
  );
}

export default App;
