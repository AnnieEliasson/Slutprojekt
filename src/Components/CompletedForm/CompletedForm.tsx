import { useContext, useRef, useState } from "react";
import {
  BookContext,
  CompletedBook,
} from "../../ContextProvider/BookContextProvider";
import { Toggle } from "../../Utility/utility";

const CompletedForm = () => {
  const { state, dispatch } = useContext(BookContext);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const [completedBook, setCompletedBook] = useState<CompletedBook>({
    ...state.activeBook,
    review: "",
    rating: 0,
  });

  const handleClickClose = () => {
    Toggle("CompletedForm", "show-form");
  };

  const handleClick = () => {
    dispatch({
      type: "ADD_COMPLETE",
      payload: completedBook,
    });
  };

  const handleChange = () => {
    if (textarea.current?.value) {
      console.log(textarea.current.value);
      setCompletedBook({
        ...state.activeBook,
        review: textarea.current?.value,
        rating: 5,
      });
    }
  };

  const rating = [1, 2, 3, 4, 5];
  return (
    <div className="CompletedForm">
      <div className="form">
        <button className="x-btn" onClick={handleClickClose}>
          X
        </button>
        <h2>{state.activeBook.title}</h2>
        <p>Review</p>
        <textarea ref={textarea} onChange={handleChange}></textarea>
        <ul>
          {rating.map((x) => {
            return (
              <li key={x}>
                <div className="point"></div>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            handleClick(), handleClickClose();
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default CompletedForm;
