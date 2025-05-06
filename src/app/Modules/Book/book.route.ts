import express from 'express';
import { BookController } from './book.controller';
// import { BookValidation } from './Book.Validation';

const bookRouter = express.Router();
bookRouter.post('/', BookController.createBook); // Create a new book
bookRouter.get('/:id', BookController.getSingleBook); // Get a single book by ID
bookRouter.put('/:id', BookController.UpdateABook); // Update a book by ID
bookRouter.delete('/:id', BookController.DeleteABook); // Delete a book by ID
bookRouter.get('/', BookController.getAllBooks); // Get all books

export default bookRouter;
