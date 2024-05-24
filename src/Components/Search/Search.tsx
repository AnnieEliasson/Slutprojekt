import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import SearchListItem from "./SearchListItem/SearchListItem";
import { Toggle } from "../../Utility/utility";
import { BookContext } from "../../ContextProvider/BookContextProvider";
import { Book, Author } from "../../Types/Types";
import Bookmark from "../Bookmark/Bookmark";
import Books from "./Book/Book";

const Search = () => {
  const { state, dispatch } = useContext(BookContext);

  const [searchInput, setSearchInput] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [urlSwitch, setUrlSwitch] = useState(false);

  let url = `https://openlibrary.org/search.json?title=${searchInput}`;
  const { datan } = useFetch({
    url,
    searchInput,
    setSpinner,
    urlSwitch,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSpinner(true);

    setSearchInput(e.target.value);
    if (e.target.value.length > 0) {
      const test = document.querySelector(".SearchContainer") as HTMLElement;
      test.classList.add("show-search");
    } else {
      const test = document.querySelector(".SearchContainer") as HTMLElement;
      test.classList.remove("show-search");
    }
  };

  const handleClickInput = () => {
    Toggle("SearchContainer", "show-search");
  };

  const handleSearchOption = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "book") {
      url = `https://openlibrary.org/search.json?title=${searchInput}`;
      setUrlSwitch(false);
    } else {
      url = `https://openlibrary.org/search/authors.json?q=j%20k%20rowling`;
      setUrlSwitch(true);
    }
  };

  const handleClickAdd = (result: Author) => {
    dispatch({
      type: "TOGGLE_AUTHOR_FAVORITE",
      payload: result,
    });
  };

  return (
    <>
      <select
        onChange={(e) => handleSearchOption(e)}
        name="test"
        id="search-dropdown"
      >
        <option value="book">Book</option>
        <option value="author">Author</option>
      </select>

      <input
        id="search-input"
        className="search-icon"
        onChange={(e) => handleChange(e)}
        onClick={handleClickInput}
        type="text"
        placeholder="Search..."
      />

      <Books />

      <div className="SearchContainer">
        <button
          className="x-btn"
          onClick={() => Toggle("SearchContainer", "show-search")}
        >
          X
        </button>
        {spinner ? <p className="loading">loading...</p> : ""}

        {!urlSwitch
          ? datan.map((result: Book) => {
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
            })
          : datan.map((result: Author) => {
              return (
                <li key={result.key}>
                  <div className="SearchListItem">
                    <Bookmark id={result.key} />
                    <img
                      className="author"
                      src={`https://covers.openlibrary.org/a/olid/${result.key}-M.jpg`}
                      alt=""
                    />

                    <div className="info">
                      <h2>{result.name}</h2>
                      <p>Birth date: {result.birth_date}</p>
                      <p>Top work: {result.top_work}</p>

                      <button
                        id={result.key}
                        className="favorite-btn"
                        onClick={() => handleClickAdd(result)}
                      >
                        Favorit
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
      </div>
    </>
  );
};

export default Search;
