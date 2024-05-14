import { useContext } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";

type PropList = {
  id: string;
};

const Bookmark = ({ id }: PropList) => {
  const { state } = useContext(BookContext);
  const result = state.favorites.filter((x) => x.cover_edition_key === id);
  const result2 = state.favorite_authors.filter((x) => x.key === id);
  return <>{result[0] || result2[0] ? <div className="bookmark"></div> : ""}</>;
};

export default Bookmark;
