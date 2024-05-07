import { useContext } from "react";
import {
  Book,
  BookContext,
} from "../../../ContextProvider/BookContextProvider";
import Bookmark from "../../Bookmark/Bookmark";

const SearchListItem = ({
  title,
  cover_edition_key,
  author_name,
  first_publish_year,
  first_sentence,
}: Book) => {
  const { state, dispatch } = useContext(BookContext);

  const result = state.favorites.filter(
    (x) => x.cover_edition_key === cover_edition_key
  );

  const handleClick = () => {
    const book = document.querySelector(".Book") as HTMLElement;
    book.classList.add("show");
    dispatch({
      type: "SET",
      payload: {
        title: title,
        author_name: author_name,
        cover_edition_key: cover_edition_key,
        first_publish_year: first_publish_year,
        first_sentence: first_sentence,
      },
    });
  };

  return (
    cover_edition_key && (
      <div className="search-link" onClick={() => handleClick()}>
        <div key={cover_edition_key} className="SearchListItem">
          {result[0] && <Bookmark />}
          <img
            src={`http://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`}
            alt=""
          />

          <div className="info">
            <h2>{title}</h2>

            <p>Author: {author_name ? author_name.join(", ") : ""}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default SearchListItem;
