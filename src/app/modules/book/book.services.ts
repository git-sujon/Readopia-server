import { IBook } from "./book.interface"
import { book } from "./book.model"

const createBook = async(payload:IBook) => {
    const result = await book.create(payload)
    return result
}

export const BookService = {
    createBook
}