
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ReviewService } from "./review.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const addReviewController = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { review } = req.body;

  const result = await ReviewService.addReview(id, review);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Add a review successfully',
    data: result,
  });
});
const getReviewController = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await ReviewService.getReview(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Get reviews successfully',
    data: result,
  });
});

export const ReviewController = {
  addReviewController,
  getReviewController
};
