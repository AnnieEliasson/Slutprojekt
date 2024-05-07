import { useContext } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";

const Completed = () => {
  const { state } = useContext(BookContext);

  return (
    <div className="Completed">
      <ul>
        {state.completed.map((x) => {
          return (
            <li className="completed-item" key={x.cover_edition_key}>
              <img
                src={`http://covers.openlibrary.org/b/olid/${x.cover_edition_key}-M.jpg`}
                alt=""
              />
              {x.title} {x.review} {x.rating}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Completed;
