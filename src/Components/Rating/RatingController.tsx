import { MouseEvent, useContext, useEffect } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";
import { CompletedBook } from "../../Types/Types";

type PropList = {
  rating: number;
  setCompletedBook: any;
  completedBook: CompletedBook;
};

const RatingController = ({
  rating,
  setCompletedBook,
  completedBook,
}: PropList) => {
  const stars = [1, 2, 3, 4, 5];
  const { state } = useContext(BookContext);

  useEffect(() => {
    const star: NodeListOf<HTMLElement> = document.querySelectorAll(".star");

    star.forEach((star) => {
      star.innerHTML = "✩";
      star.style.color = "white";
    });

    for (let index = 0; index < rating; index++) {
      star[index].innerHTML = "★";
      star[index].style.color = "goldenrod";
    }
  }, [rating]);

  const handleClick = (e: any) => {
    console.log(e.target.value, "star");
    setCompletedBook({
      ...state.activeBook,
      review: completedBook.review,
      rating: Number(e.target.value),
      pages: completedBook.pages,
    });
  };

  return (
    <div className="RatingController">
      <ul>
        {stars.map((star) => {
          return (
            <li
              onClick={(e) => handleClick(e)}
              className="star"
              value={star}
              key={star}
            >
              {"✩"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RatingController;
