import express from 'express'
import { ReviewController } from './review.controller'

const router = express.Router()


router.patch('/:id', ReviewController.addReviewController)
router.get('/:id', ReviewController.getReviewController)



export const ReviewRoute= router