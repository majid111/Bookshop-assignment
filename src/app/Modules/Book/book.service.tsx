import { TBook } from './Book.Interface';
import BookModel from './Book.Model';

const createBook = async (book: TBook) => {
  const result = await BookModel.create(book);
  return result;
};
const getAllBook = async () => {
  const result = await BookModel.find();
  return result;
};
const getSingleBook = async (book: TBook) => {
  const result = await BookModel.findOne(book);
  return result;
};
export const BookService = { createBook, getAllBook, getSingleBook };
