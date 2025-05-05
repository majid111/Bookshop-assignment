import { Model } from 'mongoose';

export type TBook = {
  id: number;
  title: string;
  author: string;
  price: number;
  category: 'Fiction' | 'Science' | 'SelfDevelopment' | 'Poetry' | 'Religious';
  description: string;
  quantity: number;
  image?: string;
  inStock: boolean;
};

export type TUpdateBook = {
  id?: number;
  title?: string;
  author?: string;
  price?: number;
  category?: 'Fiction' | 'Science' | 'SelfDevelopment' | 'Poetry' | 'Religious';
  description?: string;
  quantity?: number;
  image?: string;
  inStock?: boolean;
};

//for creating a custom instance method

// export type TBookMethods = {
//   isBookAvailable(id: string): Promise<TBook | null>;
// };

// export type BookModel = Model<TBook, Record<string, never>, TBookMethods>;

//===================== for static method====================
export interface BookModel extends Model<TBook> {
  myStaticMethod(): number;
}
