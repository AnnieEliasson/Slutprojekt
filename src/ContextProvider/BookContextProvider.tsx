import React, { createContext, useReducer } from "react";
import { Book } from "../Components/Search/Search";

type PropList = {
  children: React.ReactNode;
};

type Action = { type: "SET"; payload: Book };

const initialValue: State = {
  activeBook: {
    title: "Donald Duck",
    cover_edition_key: "OL7981435M",
    author_name: ["Kenny"],
  },
};
type State = {
  activeBook: Book;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET":
      return { ...state, activeBook: { ...action.payload } };

      break;

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
