import { Schema, model } from 'mongoose';
import { TBook } from './Book.Interface';

const bookSchema = new Schema<TBook>(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    catagory: {
      type: String,
      enum: [
        'Fiction',
        'Science',
        'SelfDevelopment',
        'Poetry',
        'Religious',
        'History',
        'Biography',
        'Philosophy',
        'Travel',
        'Cooking',
        'Art',
        'Children',
        'Comics',
        'Graphic Novels',
        'Mystery',
        'Thriller',
        'Fantasy',
        'Science Fiction',
        'Romance',
        'Horror',
        'Young Adult',
        'Classic',
      ],
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: false },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true },
);

const BookModel = model<TBook>('Book', bookSchema);
export default BookModel;
