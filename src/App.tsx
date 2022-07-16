import { useEffect, useState } from "react";
import BookConsole from "./components/BookConsole";
import BookControl from "./components/BookControl";
import Book from "./model/Book";

const App = () => {

  const [bookList, setBookList] = useState([])
  useEffect(() => {
    fetchData();
  })

  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/api/v1/books')
    const data = await response.json()
    
    
    const list = data.bookList.map((book : any) => {
      return new Book(book.id, book.title, book.author, book.pages)
    })
    setBookList(list)
  }


  const handleAddBook = (book: Book): void =>{
    // setBookList(prevData => {
    //   return [...prevData, book]
    // })
  }

  const handleDeleteBook = (id: string) => {
    // setBookList(prevData => {
    //   return [...prevData.filter(data => data.id != id)]
    // })
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
