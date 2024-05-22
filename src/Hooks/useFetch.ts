import { useEffect, useState } from "react";

type PropList = {
  url: string;
  searchInput: string;
  setSpinner?: any;
  urlSwitch: boolean;
};

export const useFetch = ({
  url,
  searchInput,
  setSpinner,
  urlSwitch,
}: PropList) => {
  const [datan, setData] = useState([]);

  if (urlSwitch) {
    url = `https://openlibrary.org/search/authors.json?q=${searchInput}`;
  }

  useEffect(() => {
    const fetchSearch = async () => {
      setSpinner(true);
      const result = await fetch(url);
      const data = await result.json();

      if (!ignore && searchInput) {
        console.log(data.docs);

        setData(data.docs);
        setSpinner(false);
      }
    };

    let ignore = false;
    setData([]);
    if (searchInput) {
      fetchSearch();
    }

    if (searchInput.length === 0) {
      setSpinner(false);
    }

    return () => {
      ignore = true;
    };
  }, [url]);

  return { datan };
};
