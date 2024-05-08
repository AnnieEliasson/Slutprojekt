import { useContext } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";
import { RemoveClass, Toggle } from "../../Utility/utility";
import CompletedForm from "../../Components/CompletedForm/CompletedForm";
import Bookmark from "../../Components/Bookmark/Bookmark";

const Book = () => {
  const { state, dispatch } = useContext(BookContext);
  const result = state.favorites.filter(
    (x) => x.cover_edition_key === state.activeBook.cover_edition_key
  );

  const handleClick = () => {
    dispatch({
      type: "ADD_FAVORITE",
      payload: { ...state.activeBook },
    });
  };

  const handleClickAddComplete = () => {
    Toggle("CompletedForm", "show-form");
  };

  const handleClickClose = () => {
    RemoveClass("Book", "show");
  };

  return (
    <>
      <CompletedForm />
      <div className="Book">
        <button className="x-btn" onClick={handleClickClose}>
          X
        </button>

        <Bookmark id={state.activeBook.cover_edition_key} />

        <ul className="left">
          <li>
            <img
              className="large-img"
              src={`http://covers.openlibrary.org/b/olid/${state.activeBook.cover_edition_key}-M.jpg`}
              alt=""
            />
          </li>
          <li>
            <button className="fav-btn" onClick={() => handleClick()}>
              {result[0] ? "Remove favorite" : "Add favorite"}
            </button>
          </li>
          <li>
            <button onClick={handleClickAddComplete}>Add to Completed</button>
          </li>
        </ul>

        <div className="book-info">
          <ul>
            <li>
              <h2>{state.activeBook.title}</h2>
            </li>
            <li>
              <p>
                <span>First Publish:</span>Year{" "}
                {state.activeBook.first_publish_year}
              </p>
            </li>

            {state.activeBook.first_sentence ? (
              <li>
                <p>
                  <span>First Sentence:</span>{" "}
                  <span className="sentence">
                    {state.activeBook.first_sentence[0]}
                  </span>{" "}
                </p>
              </li>
            ) : (
              ""
            )}

            <li>
              <p>
                <span>Author:</span>{" "}
                {state.activeBook.author_name &&
                  state.activeBook.author_name.join(", ")}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Book;
