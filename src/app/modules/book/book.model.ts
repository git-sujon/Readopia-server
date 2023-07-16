import { Schema, model } from 'mongoose';
import { BookModel, IBook } from './book.interface';
import { number } from 'zod';

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique:true
    },
    author: {
      type: String,
      required: true,
    },
    bookDetails: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    publicationDate: {
      type: Date,
      required: true,
    },
    reviews: {
      type: [String],
      default: [],
    },
                          
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Book = model<IBook, BookModel>('Book', bookSchema);
