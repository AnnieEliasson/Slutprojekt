import { Outlet } from "react-router-dom";
import { RemoveClass } from "../../Utility/utility";

const SearchPage = () => {
  const handleClick = () => {
    /* const searchPage = document.querySelector(".SearchPage") as HTMLElement;
    searchPage.classList.remove("show"); */
    RemoveClass("SearchPage", "show");
  };

  return (
    <div className="SearchPage">
      <button onClick={handleClick}>X</button>
      <Outlet />
    </div>
  );
};

export default SearchPage;
