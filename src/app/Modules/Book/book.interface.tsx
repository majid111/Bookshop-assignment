export type TBook = {
  id: number;
  title: string;
  author: string;
  price: number;
  catagory:
    | 'Fiction'
    | 'Science'
    | 'SelfDevelopment'
    | 'Poetry'
    | 'Religious'
    | 'History'
    | 'Biography'
    | 'Philosophy'
    | 'Travel'
    | 'Cooking'
    | 'Art'
    | 'Children'
    | 'Comics'
    | 'Graphic Novels'
    | 'Mystery'
    | 'Thriller'
    | 'Fantasy'
    | 'Science Fiction'
    | 'Romance'
    | 'Horror'
    | 'Young Adult'
    | 'Classic';
  description: string;
  quantity: number;
  image?: string;
  inStock: boolean;
};
