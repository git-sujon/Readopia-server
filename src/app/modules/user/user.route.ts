import express from 'express'
import { userController } from './user.controller'

const router = express.Router()

router.post('/', userController.createUserController)
router.get('/:email', userController.getSingleUserController)



export const UserRoute= router