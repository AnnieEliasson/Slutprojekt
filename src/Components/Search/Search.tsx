import { ChangeEvent, useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import SearchListItem from "./SearchListItem/SearchListItem";
import Book from "../../Pages/Search/Book";
import { Toggle } from "../../Utility/utility";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchContainer, setSearchContainer] = useState(false);
  const [spinner, setSpinner] = useState(true);

  let url = `https://openlibrary.org/search.json?title=${searchInput}`;
  const { datan } = useFetch({
    url,
    searchInput,
    searchContainer,
    setSpinner,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSpinner(true);

    setSearchInput(e.target.value);
    if (e.target.value.length) {
      setSearchContainer(true);
    } else {
      setSearchContainer(false);
    }
  };

  const handleClick = () => {
    Toggle("SearchContainer", "hide");
  };

  const handleClickInput = () => {
    Toggle("SearchContainer", "hide");
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

      <Book />

      {searchContainer && (
        <div className="SearchContainer">
          {spinner ? <p className="loading">loading...</p> : ""}
          <button
            className="hide-btn"
            onClick={handleClick}
          >{`Hide search results`}</button>

          {datan.map((result) => {
            return (
              <SearchListItem
                title={result.title}
                cover_edition_key={result.cover_edition_key}
                author_name={result.author_name}
                first_publish_year={result.first_publish_year}
                first_sentence={result.first_sentence}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Search;
