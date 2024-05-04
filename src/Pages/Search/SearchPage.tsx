import { Outlet } from "react-router-dom";
import { RemoveClass } from "../../Utility/utility";
import Book from "./Book";

const SearchPage = () => {
  const handleClick = () => {
    /* const searchPage = document.querySelector(".SearchPage") as HTMLElement;
    searchPage.classList.remove("show"); */
    RemoveClass("SearchPage", "show");
  };

  return (
    <div className="SearchPage">
      <button className="x-btn" onClick={handleClick}>
        X
      </button>
      {/* <Outlet /> */}
      <Book />
    </div>
  );
};

export default SearchPage;
