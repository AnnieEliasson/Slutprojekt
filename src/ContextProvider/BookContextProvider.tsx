import React, { createContext, useReducer } from "react";
import { Book } from "../Components/Search/Search";

type PropList = {
  children: React.ReactNode;
};

type Action = { type: "SET"; payload: Book } | { type: "RESET"; payload: Book };

const initialValue: State = {
  activeBook: {
    title: "",
    author_name: [""],
    cover_edition_key: "",
    first_publish_year: 0,
    first_sentence: [],
  },
};
type State = {
  activeBook: Book;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET":
      return { ...state, activeBook: { ...action.payload } };

    /* case "RESET":
      console.log("här");

      return { ...state, activeBook: { ...action.payload } }; */

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
