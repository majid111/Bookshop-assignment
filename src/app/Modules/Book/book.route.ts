import express from 'express';
import { BookController } from './book.controller';
// import { BookValidation } from './Book.Validation';

const router = express.Router();
router.post('/', BookController.createBook); // Create a new book
router.get('/:id', BookController.getSingleBook); // Get a single book by ID
router.put('/:id', BookController.UpdateABook); // Update a book by ID
router.delete('/:id', BookController.DeleteABook); // Delete a book by ID
router.get('/', BookController.getAllBooks); // Get all books

export const BookRoutes = router;
