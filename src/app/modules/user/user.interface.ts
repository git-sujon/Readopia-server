import { Model, Types } from "mongoose"
import { IBook } from "../book/book.interface"

export type IUser =  {
    name: string;
    email: string;
    phoneNumber: string;
    wishlist?: Types.ObjectId[] 
    finishedBook?: Types.ObjectId[] 
    addedBook?: Types.ObjectId[] 
    givenReviews?: {
      bookId: Types.ObjectId 
      reviews: string[];
    }[];
    givenRating?: {
      bookId: Types.ObjectId 
      rating: number;
    }[];
  }

  export type UserModel = Model<IUser, Record<string, unknown>>