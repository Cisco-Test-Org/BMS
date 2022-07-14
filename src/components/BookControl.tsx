import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import Book from "../model/Book";

const BookControl: React.FC<{onAdd: (book: Book)=> void}> = ({onAdd}) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')
    const [enteredPage, setEnteredPage] = useState(0)

    const titleChangehandler = (event: ChangeEvent<HTMLInputElement>)  => {
        setEnteredTitle(event.target.value)
    }

    const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredAuthor(event.target.value)
    }

    const pagesChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredPage(parseInt(event.target.value))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const book = new Book(Math.random().toString(), enteredTitle, enteredAuthor, enteredPage)
        onAdd(book)
        setEnteredTitle('')
        setEnteredAuthor('')
        setEnteredPage(0)
    }
    

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 col-4">
                    <input value={enteredTitle} onChange={titleChangehandler} type="text" className="form-control mt-2" id="bk_title" placeholder="Book Title" />
                    <input value={enteredAuthor} onChange={authorChangeHandler} type="text" className="form-control mt-2" id="bk_author" placeholder="Author Name" />
                    <input value={enteredPage} onChange={pagesChangeHandler} type="number" className="form-control mt-2" id="bk_pages" placeholder="Page Count" />
                </div>
                <div className="mb-1">
                <button type="submit" className="col-4 btn btn-primary">Add Book</button>
            </div>
            </form>

        </div>
    )
}

export default BookControl;