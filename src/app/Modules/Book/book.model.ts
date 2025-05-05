import { Schema, model } from 'mongoose';
import { BookModel, TBook } from './book.interface';

const bookSchema = new Schema<TBook, BookModel>(
  {
    id: { type: Number, trim: true, required: true },
    title: { type: String, trim: true, required: true },
    author: { type: String, trim: true, required: true },
    price: { type: Number, trim: true, required: true },
    category: {
      type: String,
      trim: true,
      enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
      required: true,
    },
    description: { type: String, trim: true, required: true },
    quantity: { type: Number, trim: true, required: true },
    image: { type: String, trim: true },
    inStock: { type: Boolean, trim: true, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

//creating a custom Static method
bookSchema.static('myStaticMethod', function myStaticMethod() {
  return 42;
});

const Book = model<TBook, BookModel>('Book', bookSchema);
export default Book;

//==================== for Instance method====================

// const bookSchema = new Schema<TBook, BookModel, TBookMethods>(
//   {
//     id: { type: Number, trim: true, required: true },
//     title: { type: String, trim: true, required: true },
//     author: { type: String, trim: true, required: true },
//     price: { type: Number, trim: true, required: true },
//     category: {
//       type: String,
//       trim: true,
//       enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
//       required: true,
//     },
//     description: { type: String, trim: true, required: true },
//     quantity: { type: Number, trim: true, required: true },
//     image: { type: String, trim: true },
//     inStock: { type: Boolean, trim: true, required: true },
//   },
//   { timestamps: true },
// );

// //creating a custom instance method
// bookSchema.methods.isBookAvailable = async function (id: string) {
//   const availableBook = await Book.findOne({ id });
//   return availableBook;
// };

// const Book = model<TBook, BookModel>('Book', bookSchema);
// export default Book;
