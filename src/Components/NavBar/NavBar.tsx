import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import { RemoveClass, Toggle } from "../../Utility/utility";
import { useContext, useEffect } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";

const navlinks = ["Home", "Favorites", "Completed"];

const NavBar = () => {
  const { state } = useContext(BookContext);

  useEffect(() => {
    const completedMenuBtn = document.getElementById(
      "Completed"
    ) as HTMLElement;

    if (state.completed.length) completedMenuBtn.classList.add("addCompleted");

    if (completedMenuBtn.classList.contains("active"))
      completedMenuBtn.classList.remove("addCompleted");
  }, [state.completed]);

  const handleClick = () => {
    const searchContainer = document.querySelector(
      ".SearchContainer"
    ) as HTMLElement;

    const searchInput = document.querySelector(
      "#search-input"
    ) as HTMLInputElement;

    searchInput.value = "";

    searchContainer.classList.remove("show-search");
    RemoveClass("Book", "show");
  };

  return (
    <div className="NavBar">
      <h1>Enchanted Pages</h1>

      <ul>
        <Search />

        {navlinks.map((navlink) => {
          return (
            <li key={navlink}>
              <NavLink
                to={`/${navlink.toLocaleLowerCase()}`}
                id={navlink}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleClick}
              >
                {navlink}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
