import { useEffect, useState } from "react";
import { Book } from "../ContextProvider/BookContextProvider";

type PropList = {
  url: string;
  searchInput: any;
  searchContainer: boolean;
  setSpinner: any;
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
      const result = await fetch(url); // response
      const data = await result.json(); // data

      if (!ignore && searchInput) {
        setData(data.docs);
        setSpinner(false);
      }
    };

    let ignore = false;
    setData([]);
    if (!searchContainer) {
      setSpinner(true);
    } else {
      fetchSearch();
    }
    return () => {
      ignore = true;
    };
  }, [url]);

  return { datan };
};
