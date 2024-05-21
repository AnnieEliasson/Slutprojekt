import { useContext } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";
import { useAverage } from "../../Hooks/useAverage";

const Home = () => {
  const { state } = useContext(BookContext);

  const { averagePages, totalPages, averageRatings } = useAverage();

  return (
    <div className="Home">
      <p>
        You've devoured <span>{state.completed.length} books</span>, immersing
        yourself in a total of <span>{totalPages} pages</span>. You're a true
        bookworm, journeying through realms of imagination and knowledge with
        each turn of the page. Keep feeding your curiosity and exploring new
        worlds through the magic of reading!
      </p>
      <div className="average-info">
        <div>
          Average pages per book:{" "}
          <span>{averagePages ? averagePages : "0"}</span>
        </div>
        <div>
          Average ratings: <span>{averageRatings ? averageRatings : "0"}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
