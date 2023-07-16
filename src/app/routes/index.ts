import express from 'express'
import { BooksRoute } from '../modules/book/book.route'
import { ReviewRoute } from '../modules/review/review.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/books/',
    route: BooksRoute,
  },
  {
    path: '/reviews/',
    route:ReviewRoute,
  },
  
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
