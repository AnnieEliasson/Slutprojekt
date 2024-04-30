import { useRef, useState } from "react";

const Search = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [searchContainer, setSearchContainer] = useState(false);

  const handleChange = () => {
    if (searchInput.current?.value) {
      setSearchContainer(true);
    } else {
      setSearchContainer(false);
    }
  };
  return (
    <>
      <input
        className="search-icon"
        ref={searchInput}
        onChange={handleChange}
        type="text"
        placeholder="Search..."
      />

      {searchContainer && <div className="SearchContainer"></div>}
    </>
  );
};

export default Search;
