import express from 'express'
import { userController } from './user.controller'

const router = express.Router()

router.patch('/add-to-wishlist/:email', userController.addToUserWishlistController)
router.patch('/delete-from-wishlist/:email', userController.delateFromUserWishlistController)
router.patch('/add-to-finishedList/:email', userController.addToUserFinishedListController)
router.patch('/delete-from-finishedList/:email', userController.delateFromUserFinishedListController)
router.post('/', userController.createUserController)
router.get('/:email', userController.getSingleUserController)



export const UserRoute= router