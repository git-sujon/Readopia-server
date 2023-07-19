"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksRoute = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.get('/', book_controller_1.BookController.getAllBooksController);
router.patch('/:id', book_controller_1.BookController.updateBooksController);
router.post('/create-book', book_controller_1.BookController.createBookController);
router.get('/:id', book_controller_1.BookController.getSingleBooksController);
router.delete('/:id', book_controller_1.BookController.deleteBooksController);
exports.BooksRoute = router;
