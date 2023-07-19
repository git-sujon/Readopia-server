import express, { Router } from 'express'
import { BooksRoute } from '../modules/book/book.route'
import { ReviewRoute } from '../modules/review/review.route'
import { UserRoute } from '../modules/user/user.route'

const router = express.Router()

type IModuleRoutes={
  path:string
  route:Router
}

const moduleRoutes:IModuleRoutes[] = [
  {
    path: '/books/',
    route: BooksRoute,
  },
  {
    path: '/reviews/',
    route:ReviewRoute,
  },
  {
    path:'/users',
    route:UserRoute
  }
  
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
