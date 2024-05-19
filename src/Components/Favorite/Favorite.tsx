import { useContext } from "react";
import { Author, Book } from "../../Types/Types";
import Bookmark from "../Bookmark/Bookmark";
import { BookContext } from "../../ContextProvider/BookContextProvider";
import { Toggle } from "../../Utility/utility";

type PropList = {
  author?: Author;
  book?: Book;
};

const Favorite = ({ author, book }: PropList) => {
  const { state, dispatch } = useContext(BookContext);

  const handleClick = (e: any) => {
    const result = state.favorites.filter(
      (x) => x.cover_edition_key === e.target.value
    );
    dispatch({ type: "SET", payload: result[0] });
    Toggle("CompletedForm", "show-form");
  };

  if (author) {
    return (
      <div className="Favorite" key={author.key}>
        <Bookmark id={author.key} />
        <img
          className="author"
          src={`https://covers.openlibrary.org/a/olid/${author.key}-M.jpg`}
          alt=""
        />
        <ul>
          <li>
            <h2>{author.name}</h2>
          </li>
          <li>Birth date: {author.birth_date}</li>
          <li>Top work: {author.top_work}</li>
          <li>
            <button
              onClick={() =>
                dispatch({
                  type: "TOGGLE_AUTHOR_FAVORITE",
                  payload: author,
                })
              }
            >
              Remove Favorite
            </button>
          </li>
        </ul>
      </div>
    );
  } else if (book) {
    return (
      <div className="Favorite" key={book.cover_edition_key}>
        <Bookmark id={book.cover_edition_key} />
        <img
          className="large-img"
          src={`http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`}
          alt=""
        />
        <ul>
          <li>
            <h2>{book.title}</h2>
          </li>
          <li>{book.first_publish_year && book.first_publish_year}</li>
          <li>{book.first_sentence && book.first_sentence[0]}</li>
          <li>{book.author_name && book.author_name}</li>
          <li>
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FAVORITE",
                  payload: book.cover_edition_key,
                })
              }
            >
              Remove Favorite
            </button>
            <button
              value={book.cover_edition_key}
              onClick={(e) => handleClick(e)}
            >
              Add to Completed
            </button>
          </li>
        </ul>
      </div>
    );
  }
};

export default Favorite;
