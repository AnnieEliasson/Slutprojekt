import { useContext } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";
import Bookmark from "../../Components/Bookmark/Bookmark";
import { Toggle } from "../../Utility/utility";

const Favorites = () => {
  const { state, dispatch } = useContext(BookContext);

  const handleClick = (e: any) => {
    const result = state.favorites.filter(
      (x) => x.cover_edition_key === e.target.value
    );
    dispatch({ type: "SET", payload: result[0] });
    Toggle("CompletedForm", "show-form");
  };
  return (
    <div className="Favorites">
      <div className="sort-btn-box">
        <button>View Favorite Books</button>
        <button className="active">View Favorite Authors</button>
      </div>

      {state.favorite_authors.map((author) => {
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
            </ul>
          </div>
        );
      })}
      {state.favorites.map((b) => {
        return (
          <div className="Favorite" key={b.cover_edition_key}>
            <Bookmark id={b.cover_edition_key} />
            <img
              className="large-img"
              src={`http://covers.openlibrary.org/b/olid/${b.cover_edition_key}-M.jpg`}
              alt=""
            />
            <ul>
              <li>
                <h2>{b.title}</h2>
              </li>
              <li>{b.first_publish_year && b.first_publish_year}</li>
              <li>{b.first_sentence && b.first_sentence[0]}</li>
              <li>{b.author_name && b.author_name}</li>
              <li>
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FAVORITE",
                      payload: b.cover_edition_key,
                    })
                  }
                >
                  Remove Favorite
                </button>
                <button
                  value={b.cover_edition_key}
                  onClick={(e) => handleClick(e)}
                >
                  Add to completed
                </button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
