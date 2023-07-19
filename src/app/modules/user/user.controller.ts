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

export const userController = {
    createUserController,
    getSingleUserController
}