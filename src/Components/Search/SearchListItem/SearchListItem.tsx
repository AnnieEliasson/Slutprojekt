import { Book } from "../Search";

const SearchListItem = ({ title, cover_edition_key, author_name }: Book) => {
  return (
    cover_edition_key && (
      <div key={cover_edition_key} className="SearchListItem">
        <img
          src={`http://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`}
          alt=""
        />

        <div className="info">
          <h2>{title}</h2>
          <p>Author: {author_name ? author_name.join(", ") : ""}</p>
          <button>add to favrites</button>
        </div>

        <div className="bookmark"></div>
      </div>
    )
  );
};

export default SearchListItem;
