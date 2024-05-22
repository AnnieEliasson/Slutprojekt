import { useContext } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";
import { useAverage } from "../../Hooks/useAverage";

const Home = () => {
  const { state } = useContext(BookContext);

  const { averagePages, totalPages, averageRatings } = useAverage();

  return (
    <div className="Home">
      <p className="home-center">
        You've devoured <span>{state.completed.length} books</span>, immersing
        yourself in a total of <span>{totalPages} pages</span>. You're a true
        bookworm, journeying through realms of imagination and knowledge with
        each turn of the page. Keep feeding your curiosity and exploring new
        worlds through the magic of reading!
      </p>
      <div className="average-info">
        <div>
          <p className="rolling-text">
            Average pages per book:{" "}
            <span>{averagePages ? averagePages : "0"}</span>
          </p>
        </div>
        <div>
          <p className="rolling-text">
            Average rating per book:{" "}
            <span>{averageRatings ? averageRatings : "0"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
