import { Link } from "react-router-dom";
import { Book } from "../Search";
import { useContext } from "react";
import { BookContext } from "../../../ContextProvider/BookContextProvider";

const SearchListItem = ({
  title,
  cover_edition_key,
  author_name,
  first_publish_year,
  first_sentence,
}: Book) => {
  const { dispatch } = useContext(BookContext);

  const handleClick = () => {
    /* dispatch({
      type: "RESET",
      payload: {
        title: "",
        author_name: [],
        cover_edition_key: "",
      },
    }); */

    const searchPage = document.querySelector(".SearchPage") as HTMLElement;
    searchPage.classList.add("show");
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
      <Link
        className="search-link"
        to={`/search/${cover_edition_key}`}
        onClick={() => handleClick()}
      >
        <div key={cover_edition_key} className="SearchListItem">
          <img
            src={`http://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`}
            alt=""
          />

          <div className="info">
            <h2>{title}</h2>
            <p>Author: {author_name ? author_name.join(", ") : ""}</p>
            {/* <p>First Publish: year {first_publish_year}</p> */}
            <button>add to favrites</button>
          </div>
          <div className="bookmark"></div>
        </div>
      </Link>
    )
  );
};

export default SearchListItem;
