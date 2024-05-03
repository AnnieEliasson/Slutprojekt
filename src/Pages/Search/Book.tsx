import { useContext } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";

const Book = () => {
  const { state } = useContext(BookContext);

  return (
    <div className="Book">
      <img
        className="large-img"
        src={`http://covers.openlibrary.org/b/olid/${state.activeBook.cover_edition_key}-M.jpg`}
        alt=""
      />

      <div className="book-info">
        <h2>{state.activeBook.title}</h2>
        <p>First Publish: {state.activeBook.first_publish_year}</p>
        {state.activeBook.first_sentence ? (
          <p>First Sentence: {state.activeBook.first_sentence[0]} </p>
        ) : (
          ""
        )}

        <p>Author: {state.activeBook.author_name}</p>
      </div>
    </div>
  );
};

export default Book;
