import { ChangeEvent, useContext, useRef, useState } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";
import { Toggle } from "../../Utility/utility";
import { CompletedBook } from "../../Types/Types";
import RatingController from "../Rating/RatingController";

const CompletedForm = () => {
  const { state, dispatch } = useContext(BookContext);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const [completedBook, setCompletedBook] = useState<CompletedBook>({
    ...state.activeBook,
    review: "",
    rating: 0,
    pages: 0,
  });

  const handleClickClose = () => {
    if (textarea.current) {
      textarea.current.value = "";
    }
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
      setCompletedBook({
        ...state.activeBook,
        review: textarea.current?.value,
        rating: completedBook.rating,
        pages: completedBook.pages,
      });
    }
  };

  const handleChangeRating = (e: ChangeEvent<HTMLSelectElement>) => {
    setCompletedBook({
      ...state.activeBook,
      review: completedBook.review,
      rating: Number(e.target.value),
      pages: completedBook.pages,
    });
  };

  const handleChangePages = (e: ChangeEvent<HTMLInputElement>) => {
    setCompletedBook({
      ...state.activeBook,
      review: completedBook.review,
      rating: completedBook.rating,
      pages: Number(e.target.value),
    });
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
        <textarea
          id="textarea"
          ref={textarea}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="rating">
          Rating:{" "}
          <select
            onChange={(e) => handleChangeRating(e)}
            name="rating"
            id="rating"
          >
            {rating.map((x) => {
              return (
                <option key={x} value={x}>
                  {x}
                </option>
              );
            })}
          </select>
          <RatingController rating={completedBook.rating} />
        </label>

        <label htmlFor="pagesInput">
          Pages:{" "}
          <input
            onChange={(e) => handleChangePages(e)}
            id="pagesInput"
            type="number"
          />
        </label>
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
