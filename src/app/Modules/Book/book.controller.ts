import { Request, response, Response } from 'express';
import { BookServices } from './book.service';
import { BookValidationSchema } from './book.zod.validator';

const createBook = async (req: Request, res: Response) => {
  try {
    const book = req.body;
    // validate request body
    const zodParsedData = BookValidationSchema.parse(book);
    const result = await BookServices.createBook(zodParsedData);

    // send response
    res.status(201).json({
      success: true,
      message: 'Book is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Book is not created',
      data: error,
    });
  }
};
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const Books = await BookServices.getAllBook();
    res.status(200).json({
      success: true,
      message: 'All Book fetched successfully',
      data: Books,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Books are not fetched',
      data: error,
    });
  }
};
const getSingleBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await BookServices.getSingleBook(id);
    res.status(200).json({
      success: true,
      message: 'Book fetched successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Book is not fetched',
      data: error,
    });
  }
};
const UpdateABook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const result = await BookServices.UpdateABook(id, updateData);
    res.status(201).json({
      success: true,
      message: 'Book updated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Book is not updated',
      data: error,
    });
  }
};
const DeleteABook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await BookServices.deleteABook(id);
    res.status(201).json({
      success: true,
      message: 'Book deleted successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Book is not deleted',
      data: error,
    });
  }
};

export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  UpdateABook,
  DeleteABook,
};
