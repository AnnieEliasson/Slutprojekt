import React, { createContext, useReducer } from "react";
import { State, Action } from "../Types/Types";
import { reducer } from "./reducer";

type PropList = {
  children: React.ReactNode;
};

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
