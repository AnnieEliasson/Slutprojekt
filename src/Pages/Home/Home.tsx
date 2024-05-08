import { useContext } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";

const Home = () => {
  const { state } = useContext(BookContext);

  let totalPages = 0;

  state.completed.forEach((x) => {
    totalPages = totalPages + x.pages;
  });
  return (
    <div className="Home">
      <p>
        You've devoured <span>{state.completed.length} books</span>, immersing
        yourself in a total of <span>{totalPages} pages</span>. You're a true
        bookworm, journeying through realms of imagination and knowledge with
        each turn of the page. Keep feeding your curiosity and exploring new
        worlds through the magic of reading!
      </p>
    </div>
  );
};

export default Home;
