type PropList = {
  rating: number;
};

const Rating = ({ rating }: PropList) => {
  const stars = [];
  for (let index = 0; index < rating; index++) {
    stars.push("★");
  }

  for (let index = stars.length; index < 5; index++) {
    stars.push("✩");
  }

  let ratingStar: NodeListOf<HTMLElement> =
    document.querySelectorAll(".rating-star");

  for (let index = 0; index < ratingStar.length; index++) {
    if (ratingStar[index].innerText === "★") {
      ratingStar[index].style.color = "goldenrod";
    }
  }

  return (
    <div className="Rating">
      <ul className="star-container">
        {stars.map((star) => {
          return <li className="rating-star">{star}</li>;
        })}
      </ul>
    </div>
  );
};

export default Rating;
