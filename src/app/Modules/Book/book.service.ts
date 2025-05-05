import { TBook, TUpdateBook } from './book.interface';
import Book from './book.model';

const createBook = async (book: TBook) => {
  const result = await Book.create(book);
  // const answer=Book.myStaticMethod(); // static method
  // const bookdata = new Book(book);
  // bookdata.isBookAvailable;
  // const result = bookdata.save();
  return result;
};
const getAllBook = async () => {
  const result = await Book.find();
  return result;
};
const getSingleBook = async (id: string) => {
  const result = await Book.findOne({ id });
  return result;
};
const deleteABook = async (id: string) => {
  const result = await Book.findByIdAndDelete({ id });
  return result;
};
const UpdateABook = async (id: string, updateData: TUpdateBook) => {
  const result = await Book.findByIdAndUpdate(
    { id, updateData },
    { new: true },
  );
  return result;
};
export const BookServices = {
  createBook,
  getAllBook,
  getSingleBook,
  UpdateABook,
  deleteABook,
};
