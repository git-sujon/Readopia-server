import express from 'express'
import { BookController } from './book.controller'

const router = express.Router()

router.post('/create-book', BookController.createBookController)
router.get('/', BookController.getAllBooksController)


export const BooksRoute= router