class Book{
    id: string
    name: string
    author: string
    pages: number

    constructor(id: string, name: string, author: string, pages: number){
        this.id = id
        this.name = name
        this.author = author
        this.pages = pages
    }
}

export default Book;