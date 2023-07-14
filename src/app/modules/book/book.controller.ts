import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BookService } from "./book.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createBookController =catchAsync(async (req: Request, res: Response) => {
    const  {...bookData} = req.body

    const result = await BookService.createBook(bookData)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Book created successfully',
        data: result,
      })

})


export const BookController = {
    createBookController
}