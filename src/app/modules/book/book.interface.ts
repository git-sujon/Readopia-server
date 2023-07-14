import { Model } from "mongoose"

export type IBook ={
    title:string
    author:string
    genre:string
    publicationDate: Date

}

export  type BoolModel= Model<IBook, Record<string, unknown>>



