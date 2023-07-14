import { Schema, model } from 'mongoose';
import { BookModel, IBook } from './book.interface';

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
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

export const book = model<IBook, BookModel>('Book', bookSchema);
