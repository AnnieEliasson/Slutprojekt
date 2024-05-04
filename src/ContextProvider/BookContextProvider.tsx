import React, { createContext, useReducer } from "react";
import Favorites from "../Pages/Favorites/Favorites";

type PropList = {
  children: React.ReactNode;
};

type Action =
  | { type: "SET"; payload: Book }
  | { type: "ADD_FAVORITE"; payload: Book };

const initialValue: State = {
  activeBook: {
    title: "",
    author_name: [""],
    cover_edition_key: "",
    first_publish_year: 0,
    first_sentence: [],
  },
  favorites: [],
};

export type Book = {
  title: string;
  cover_edition_key: string;
  author_name: string[];
  first_publish_year: number;
  first_sentence: string[];
  favorite?: boolean;
};

type State = {
  activeBook: Book;
  favorites: Book[];
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET":
      return { ...state, activeBook: { ...action.payload } };

    case "ADD_FAVORITE":
      console.log(state.favorites);

      let test = state.favorites.filter(
        (x) => x.cover_edition_key === action.payload.cover_edition_key
      );

      if (test[0]) {
        console.log("finns redan");

        return {
          ...state,
          favorites: [
            ...state.favorites.filter(
              (x) => x.cover_edition_key != action.payload.cover_edition_key
            ),
          ],
        };
      } else {
        console.log("lägger till");

        return { ...state, favorites: [...state.favorites, action.payload] };
      }
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
