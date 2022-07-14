import Book from '../model/Book'
import './BookConsole.css'


const BookConsole: React.FC<{list: Book[]}> = ({list}) => {
    

    return(
        <div className="mt-5 col-5">
            <ul className="list-group">
                {list.map(item => (
                    <li key={item.id} className="list-group-item">
                        {item.name} - {item.author} - {item.pages}
                        <span><button type="button" className="btn btn-danger">Remove</button></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookConsole;