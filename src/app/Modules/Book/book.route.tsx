import express from 'express';
import { BookController } from './Book.Controller';
// import { BookValidation } from './Book.Validation';

const router = express.Router();
router.post('/createBook', BookController.createBook); // Create a new book
router.get('/getAllBooks', BookController.getAllBooks); // Get all books
router.get('/getSingleBook', BookController.getSingleBook); // Get a single book by ID

export const BookRoutes = router;
