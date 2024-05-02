import { useContext } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";

const Book = () => {
  const { state } = useContext(BookContext);

  return (
    <div className="Book">
      <img
        src={`http://covers.openlibrary.org/b/olid/${state.activeBook.cover_edition_key}-L.jpg`}
        alt=""
      />

      <div className="book-info">
        <h2>{state.activeBook.title}</h2>
        <p>{state.activeBook.author_name}</p>
      </div>
    </div>
  );
};

export default Book;
