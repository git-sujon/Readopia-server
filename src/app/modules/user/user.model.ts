import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

const userSchema = new Schema<IUser, UserModel>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Book" }],
    finishedBook: [{ type: Schema.Types.ObjectId, ref: "Book" }],
    addedBook: [{ type: Schema.Types.ObjectId, ref: "Book" }],
    givenReviews: [
      {
        bookId: { type: Schema.Types.ObjectId, ref: "Book" },
        reviews: [{ type: String }],
      },
    ],
    givenRating: [
      {
        bookId: { type: Schema.Types.ObjectId, ref: "Book" },
        rating: { type: Number },
      },
    ],
  });


  export const  User = model<IUser,UserModel>('User', userSchema)