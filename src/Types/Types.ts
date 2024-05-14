export type Book = {
  title: string;
  cover_edition_key: string;
  author_name: string[];
  first_publish_year: number;
  first_sentence: string[];
  favorite?: boolean;
};

export type CompletedBook = Book & {
  review: string;
  rating: number;
  pages: number;
};

export type Author = {
  key: string;
  name: string;
  birth_date: string;
  top_work: string;
};

export type State = {
  activeBook: Book;
  favorites: Book[];
  completed: CompletedBook[];
  favorite_authors: Author[];
};

export type Action =
  | { type: "SET"; payload: Book }
  | { type: "ADD_FAVORITE"; payload: Book }
  | { type: "REMOVE_FAVORITE"; payload: String }
  | { type: "ADD_COMPLETE"; payload: CompletedBook }
  | { type: "TOGGLE_AUTHOR_FAVORITE"; payload: Author };
