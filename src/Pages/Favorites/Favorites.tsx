import React, { useContext } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";

const Favorites = () => {
  const { state } = useContext(BookContext);
  return (
    <div className="Favorites">
      Favorites
      {state.favorites.map((b) => {
        return <li>{b.title}</li>;
      })}
    </div>
  );
};

export default Favorites;
