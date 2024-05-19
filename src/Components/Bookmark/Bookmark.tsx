import { useContext } from "react";
import { BookContext } from "../../ContextProvider/BookContextProvider";

type PropList = {
  id: string;
};

const Bookmark = ({ id }: PropList) => {
  const { state } = useContext(BookContext);
  const resultBook = state.favorites.filter((x) => x.cover_edition_key === id);
  const resultAuthor = state.favorite_authors.filter((x) => x.key === id);
  return (
    <>
      {resultBook[0] || resultAuthor[0] ? <div className="bookmark"></div> : ""}
    </>
  );
};

export default Bookmark;
