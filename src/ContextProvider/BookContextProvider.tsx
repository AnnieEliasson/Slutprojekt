import React, { createContext, useReducer } from "react";

type PropList = {
  children: React.ReactNode;
};

type Action =
  | { type: "SET"; payload: Book }
  | { type: "ADD_FAVORITE"; payload: Book }
  | { type: "REMOVE_FAVORITE"; payload: String }
  | { type: "ADD_COMPLETE"; payload: CompletedBook }
  | { type: "TOGGLE_AUTHOR_FAVORITE"; payload: Author };

const initialValue: State = {
  activeBook: {
    title: "",
    author_name: [""],
    cover_edition_key: "",
    first_publish_year: 0,
    first_sentence: [],
  },
  favorites: [],
  completed: [],
  favorite_authors: [],
};

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

type State = {
  activeBook: Book;
  favorites: Book[];
  completed: CompletedBook[];
  favorite_authors: Author[];
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET":
      return { ...state, activeBook: { ...action.payload } };

    case "ADD_FAVORITE":
      let test = state.favorites.filter(
        (x) => x.cover_edition_key === action.payload.cover_edition_key
      );

      if (test[0]) {
        return {
          ...state,
          favorites: [
            ...state.favorites.filter(
              (x) => x.cover_edition_key != action.payload.cover_edition_key
            ),
          ],
        };
      } else {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }

    case "ADD_COMPLETE": {
      return { ...state, completed: [...state.completed, action.payload] };
    }

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: [
          ...state.favorites.filter(
            (x) => x.cover_edition_key !== action.payload
          ),
        ],
      };

    case "TOGGLE_AUTHOR_FAVORITE":
      return {
        ...state,
        favorite_authors: [...state.favorite_authors, action.payload],
      };
      return state;

    default:
      break;
  }

  return state;
};

export const BookContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialValue,
  dispatch: () => null,
});

const BookContextProvider = ({ children }: PropList) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
