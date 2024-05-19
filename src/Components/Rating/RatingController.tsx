import { useEffect } from "react";

type PropList = {
  rating: number;
};

const RatingController = ({ rating }: PropList) => {
  const stars = [1, 2, 3, 4, 5];

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

  return (
    <div className="RatingController">
      <ul>
        {stars.map((star) => {
          return (
            <li className="star" value={star} key={star}>
              {"✩"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RatingController;
