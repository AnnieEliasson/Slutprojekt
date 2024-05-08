import { ChangeEvent, useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import SearchListItem from "./SearchListItem/SearchListItem";
import Book from "../../Pages/Search/Book";
import { Toggle } from "../../Utility/utility";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [spinner, setSpinner] = useState(false);

  let url = `https://openlibrary.org/search.json?title=${searchInput}`;
  const { datan } = useFetch({
    url,
    searchInput,
    setSpinner,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSpinner(true);

    setSearchInput(e.target.value);
    if (e.target.value.length > 0) {
      /* setSearchContainer(true); */
      const test = document.querySelector(".SearchContainer") as HTMLElement;
      test.classList.add("show-search");
      /* setSearchContainer(true); */
    } else {
      const test = document.querySelector(".SearchContainer") as HTMLElement;
      test.classList.remove("show-search");
    }
  };

  /* const handleClick = () => {
    Toggle("SearchContainer", "show-search");
  }; */

  const handleClickInput = () => {
    Toggle("SearchContainer", "show-search");
  };

  return (
    <>
      <input
        id="search-input"
        className="search-icon"
        onChange={(e) => handleChange(e)}
        onClick={handleClickInput}
        type="text"
        placeholder="Search..."
      />

      {/* <button
        className="hide-btn"
        onClick={handleClick}
      >{`Hide search results`}</button> */}

      <Book />

      <div className="SearchContainer">
        {spinner ? <p className="loading">loading...</p> : ""}

        {datan.map((result) => {
          return (
            <li key={result.cover_edition_key}>
              <SearchListItem
                title={result.title}
                cover_edition_key={result.cover_edition_key}
                author_name={result.author_name}
                first_publish_year={result.first_publish_year}
                first_sentence={result.first_sentence}
              />
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Search;
