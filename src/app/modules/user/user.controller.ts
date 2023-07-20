import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { UserService } from "./user.services";
const createUserController =catchAsync(async (req: Request, res: Response) => {
    const  {...userData} = req.body

    const result = await UserService.createUser(userData) 



    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'User created successfully',
        data: result,
      })

})
const getSingleUserController =catchAsync(async (req: Request, res: Response) => {
   const {email} = req.params

    const result = await UserService.getSingleUser(email)



    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'User created successfully',
        data: result,
      })

})


const addToUserWishlistController =catchAsync(async (req: Request, res: Response) => {
    const { email } = req.params;
    const { wishlist } = req.body;

    const result = await UserService.addToUserWishlist(email, wishlist)



    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Book successfully added to wishlist',
        data: result,
      })

})
const delateFromUserWishlistController =catchAsync(async (req: Request, res: Response) => {
    const { email } = req.params;
    const { wishlist } = req.body;

    const result = await UserService.delateFromUserWishlist(email, wishlist)



    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Book delte from wishlist successfully',
        data: result,
      })

})
const addToUserFinishedListController =catchAsync(async (req: Request, res: Response) => {
    const { email } = req.params;
    const { finishedBook } = req.body;

    const result = await UserService.addToUserFinishedList(email, finishedBook)



    sendResponse(res, { 
        success: true,
        statusCode: httpStatus.OK,
        message: 'Book added to Finished list successfully',
        data: result,
      })

})
const delateFromUserFinishedListController =catchAsync(async (req: Request, res: Response) => {
    const { email } = req.params;
    const { finishedBook } = req.body;

    const result = await UserService.delateFromUserFinishedList(email, finishedBook)



    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Book delete from finished list successfully',
        data: result,
      })

})

export const userController = {
    createUserController,
    getSingleUserController,
    addToUserWishlistController,
    delateFromUserWishlistController,
    addToUserFinishedListController,
    delateFromUserFinishedListController
}