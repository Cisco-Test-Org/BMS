import Book from '../model/Book'
import './BookConsole.css'


const BookConsole: React.FC<{list: Book[], onDelete: (id: string) => void, onUpdateSet: (id: string) => void}> = ({list, onDelete, onUpdateSet}) => {

    const handleDelete = (id: string) => {
         onDelete(id)
    }

    const handleUpdate = (id: string) => {
        onUpdateSet(id)
    }
    

    return(
        <div className="mt-5 col-5">
            <ul className="list-group">
                {list.length === 0 && <p>There are no books! 😥</p>}
                {list.map(item => (
                    <li onClick={() => handleUpdate(item.id)} key={item.id} className="list-group-item">
                        {item.name} - {item.author} - {item.pages}
                        <span><button onClick={() => handleDelete(item.id)} type="button" className="btn btn-danger">Remove</button></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookConsole;