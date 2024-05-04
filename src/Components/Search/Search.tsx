import { ChangeEvent, useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import SearchListItem from "./SearchListItem/SearchListItem";
import Book from "../../Pages/Search/Book";
import SearchPage from "../../Pages/Search/SearchPage";

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
    console.log(datan[0]);

    setSearchInput(e.target.value);
    if (e.target.value.length) {
      setSearchContainer(true);
    } else {
      setSearchContainer(false);
    }
  };
  return (
    <>
      <input
        className="search-icon"
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Search..."
      />

      <Book />

      {searchContainer && (
        <div className="SearchContainer">
          {spinner ? "loading..." : ""}

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
