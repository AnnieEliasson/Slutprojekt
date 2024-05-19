import { useContext } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";
import Bookmark from "../../Components/Bookmark/Bookmark";
import Rating from "../../Components/Rating/Rating";

const Completed = () => {
  const { state } = useContext(BookContext);

  return (
    <div className="Completed">
      <ul>
        {state.completed.map((x) => {
          return (
            <li className="completed-item" key={x.cover_edition_key}>
              <Bookmark id={x.cover_edition_key} />
              <img
                src={`http://covers.openlibrary.org/b/olid/${x.cover_edition_key}-M.jpg`}
                alt=""
              />
              <ul className="info">
                <li>
                  <h2>{x.title}</h2>
                </li>
                <li>
                  <span>Review:</span> {x.review}
                </li>
                <li>
                  <span>Pages:</span> {x.pages}
                </li>
                <li>
                  <span>Rating:</span> <Rating rating={x.rating} />
                </li>
                <li></li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Completed;
