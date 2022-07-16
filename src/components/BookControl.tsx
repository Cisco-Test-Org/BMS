import React, { ChangeEvent, useState } from "react";
import Book from "../model/Book";
import validationUtil from "../util/validation-util";

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

        const result = validationUtil(enteredTitle, enteredAuthor, enteredPage);

        if(result === 0) {
            event.preventDefault()
            const book = new Book(Math.random().toString(), enteredTitle, enteredAuthor, enteredPage)
            onAdd(book)
            setEnteredTitle('')
            setEnteredAuthor('')
            setEnteredPage(0)
        }

    }
    

    return(
        <div>
            <form>
                <div className="mb-3 col-6">
                    <input value={enteredTitle} onChange={titleChangehandler} type="text" className="form-control mt-2" id="bk_title" placeholder="Book Title" />
                    <input value={enteredAuthor} onChange={authorChangeHandler} type="text" className="form-control mt-2" id="bk_author" placeholder="Author Name" />
                    <input value={enteredPage} onChange={pagesChangeHandler} type="number" className="form-control mt-2" id="bk_pages" placeholder="Page Count" />
                </div>
                <div className="mb-1">
                    <button onClick={handleSubmit} type="button" className='col-6 btn btn-primary'>Add Book</button>
                </div>
                <div className="mb-1">
                    <button type="submit" className='col-6 btn btn-warning' disabled={true}>Update Book</button>
                </div>
            </form>

        </div>
    )
}

export default BookControl;