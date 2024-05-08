import { useEffect, useState } from "react";
import { Book } from "../ContextProvider/BookContextProvider";

type PropList = {
  url: string;
  searchInput: string;
  searchContainer: boolean;
  setSpinner?: any;
};

export const useFetch = ({
  url,
  searchInput,
  searchContainer,
  setSpinner,
}: PropList) => {
  const [datan, setData] = useState([] as Book[]);

  useEffect(() => {
    const fetchSearch = async () => {
      setSpinner(true);
      const result = await fetch(url); // response
      const data = await result.json(); // data

      if (!ignore && searchInput) {
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
