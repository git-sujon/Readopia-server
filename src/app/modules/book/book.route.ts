import express from 'express'
import { BookController } from './book.controller'

const router = express.Router()

router.get('/', BookController.getAllBooksController)
router.patch('/:id', BookController.updateBooksController)
router.post('/create-book', BookController.createBookController)
router.get('/:id', BookController.getSingleBooksController)
router.delete('/:id', BookController.deleteBooksController)


export const BooksRoute= router