import { useContext } from "react";
import { BookContext } from "../../../ContextProvider/BookContextProvider";
import Bookmark from "../../Bookmark/Bookmark";
import { Book } from "../../../Types/Types";

const SearchListItem = ({
  title,
  cover_edition_key,
  author_name,
  first_publish_year,
  first_sentence,
}: Book) => {
  const { dispatch } = useContext(BookContext);

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
        <div className="SearchListItem">
          <Bookmark id={cover_edition_key} />
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
