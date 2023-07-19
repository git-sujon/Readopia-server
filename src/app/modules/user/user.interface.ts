import { Model, Types } from "mongoose"
import { IBook } from "../book/book.interface"

export type IUser =  {
    name: string;
    email: string;
    phoneNumber: string;
    wishlist?: Types.ObjectId[] | IBook[];
    finishedBook?: Types.ObjectId[] | IBook[];
    addedBook?: Types.ObjectId[] | IBook[];
    givenReviews?: {
      bookId: Types.ObjectId | IBook;
      reviews: string[];
    }[];
    givenRating?: {
      bookId: Types.ObjectId | IBook;
      rating: number;
    }[];
  }

  export type UserModel = Model<IUser, Record<string, unknown>>