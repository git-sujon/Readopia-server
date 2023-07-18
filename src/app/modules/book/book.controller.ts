import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BookService } from "./book.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { paginationFieldsConstant } from "../../../constant.ts/paginationFieldsConstant";
import { bookFilterableFields } from "./book.contents";

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
const getAllBooksController =catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, bookFilterableFields)

    const paginationOptions = pick(req.query, paginationFieldsConstant)


    const result = await BookService.getAllBooks(filters, paginationOptions)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Books retrieved successfully',
        data: result,
      })

})
const getSingleBooksController =catchAsync(async (req: Request, res: Response) => {
    const  {id} = req.params

    const result = await BookService.getSingleBooks(id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Book retrieved successfully',
        data: result,
      })

})
const updateBooksController =catchAsync(async (req: Request, res: Response) => {
    const  {id} = req.params
    const {...payload} = req.body

    const result = await BookService.updateBook(id, payload)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Book update successfully',
        data: result,
      })
 
})
const deleteBooksController =catchAsync(async (req: Request, res: Response) => {
    const  {id} = req.params

    const result = await BookService.deleteBook(id)

  
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Book Delete successfully',
        data: result,
      })

})


export const BookController = {
    createBookController,
    getAllBooksController,
    getSingleBooksController,
    updateBooksController,
    deleteBooksController
}