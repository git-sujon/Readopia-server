"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        unique: true
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
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Book = (0, mongoose_1.model)('Book', bookSchema);
