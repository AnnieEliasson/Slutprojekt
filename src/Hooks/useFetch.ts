import { useEffect, useState } from "react";
import { Book } from "../Components/Search/Search";

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
        console.log(data.docs[0]);

        setData(data.docs);
        setSpinner(false);
      }
    };

    let ignore = false;

    if (!searchContainer) {
      setData([]);
      setSpinner(true);
    } else {
      setData([]);
      fetchSearch();
    }
    return () => {
      ignore = true;
    };
  }, [url]);

  return { datan };
};
