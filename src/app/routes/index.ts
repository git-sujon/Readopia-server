import express from 'express'
import { BooksRoute } from '../modules/book/book.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/books/',
    route: BooksRoute,
  },
  
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
