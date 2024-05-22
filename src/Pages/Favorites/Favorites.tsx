import { useContext } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";
import Favorite from "../../Components/Favorite/Favorite";

const Favorites = () => {
  const { state } = useContext(BookContext);

  return (
    <div className="Favorites">
      {state.favorites.length ? (
        <div className="books">
          <h1 className="favorit-list-title">Favorite Books</h1>
          {state.favorites.map((book) => {
            return <Favorite book={book} />;
          })}
        </div>
      ) : (
        <h3 className="favorit-list-title">No Favorit Books yet!</h3>
      )}

      {state.favorite_authors.length ? (
        <div className="authors">
          <h1 className="favorit-list-title">Favorite Authors</h1>
          {state.favorite_authors.map((author) => {
            return <Favorite author={author} />;
          })}
        </div>
      ) : (
        <h3 className="favorit-list-title">No Favorit Authors yet!</h3>
      )}
    </div>
  );
};

export default Favorites;
