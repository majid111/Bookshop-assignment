import { Request, Response } from 'express';
import { BookService } from './Book.Service';

const createBook = (req: Request, res: Response) => {
  try {
    const book = req.body;
    const result = BookService.createBook(book);
    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllBooks = (req: Request, res: Response) => {
  try {
    const book = req.body;
    const result = BookService.getAllBook();
    res.status(201).json({
      success: true,
      message: 'All Book fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getSingleBook = (req: Request, res: Response) => {
  try {
    const book = req.body;
    const result = BookService.getSingleBook(book);
    res.status(201).json({
      success: true,
      message: 'Book fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook,
};
