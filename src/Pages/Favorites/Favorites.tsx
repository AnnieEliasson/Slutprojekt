import { useContext, useState } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";
import Favorite from "../../Components/Favorite/Favorite";

const Favorites = () => {
  const { state } = useContext(BookContext);
  const [viewBook, setViewBook] = useState(false);
  const [viewAuthor, setViewAuthor] = useState(false);

  const handleClickBook = (e: any) => {
    const btn = e.target as HTMLElement;
    btn.classList.toggle("active");
  };

  const handleClickAuthor = (e: any) => {
    const btn = e.target as HTMLElement;
    btn.classList.toggle("active");
  };

  return (
    <div className="Favorites">
      <div className="sort-btn-box">
        <button
          onClick={(e) => {
            setViewBook(!viewBook), handleClickBook(e);
          }}
        >
          View Favorite Books
        </button>

        <button
          onClick={(e) => {
            setViewAuthor(!viewAuthor), handleClickAuthor(e);
          }}
        >
          View Favorite Authors
        </button>
      </div>

      {viewBook &&
        state.favorites.map((book) => {
          return <Favorite book={book} />;
        })}

      {viewAuthor &&
        state.favorite_authors.map((author) => {
          return <Favorite author={author} />;
        })}

      {/* {state.favorite_authors.map((author) => {
        return <Favorite author={author} />;
      })}
      {state.favorites.map((book) => {
        return <Favorite book={book} />;
      })} */}
    </div>
  );
};

export default Favorites;
