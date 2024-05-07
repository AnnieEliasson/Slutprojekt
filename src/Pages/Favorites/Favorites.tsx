import { useContext } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";
import Bookmark from "../../Components/Bookmark/Bookmark";

const Favorites = () => {
  const { state, dispatch } = useContext(BookContext);
  return (
    <div className="Favorites">
      {state.favorites.map((b) => {
        return (
          <div className="Favorite" key={b.cover_edition_key}>
            <Bookmark />
            <img
              className="large-img"
              src={`http://covers.openlibrary.org/b/olid/${b.cover_edition_key}-M.jpg`}
              alt=""
            />
            <ul>
              <li>{b.title}</li>
              <li>{b.first_publish_year}</li>
              <li>{b.first_sentence}</li>
              <li>{b.author_name}</li>
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
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
