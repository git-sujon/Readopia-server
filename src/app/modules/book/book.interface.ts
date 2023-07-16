import { Model } from 'mongoose';

export type IBook = {
    title: string;
    bookDetails:string
    author: string;
    genre: string;
    publicationDate: Date;
    imgUrl:string
    rating?:number
    reviews?: string[];
    

};

export type BookModel = Model<IBook, Record<string, unknown>>;

export type IBookFilter = {
  searchTerm?: string;
};
