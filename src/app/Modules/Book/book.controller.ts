import { Request, response, Response } from 'express';
import { BookServices } from './book.service';
import { BookValidationSchema } from './book.zod.validator';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const book = req.body;
  // validate request body
  const zodParsedData = BookValidationSchema.parse(book);
  const result = await BookServices.createBook(zodParsedData);

  // send response
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Book created successfully',
    data: result,
  });
});
const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const Books = await BookServices.getAllBook();
  // send response
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Books fetched successfully',
    data: Books,
  });
});
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookServices.getSingleBook(id);
  // send response
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Book fetched successfully',
    data: result,
  });
});
const UpdateABook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;
  const result = await BookServices.UpdateABook(id, updateData);
  // send response
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Book updated successfully',
    data: result,
  });
});
const DeleteABook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookServices.deleteABook(id);
  // send response
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Book deleted successfully',
    data: result,
  });
});

export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  UpdateABook,
  DeleteABook,
};
