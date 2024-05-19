import { useContext, useEffect, useState } from "react";
import { BookContext } from "../ContextProvider/BookContextProvider";

export const useAverage = () => {
  const { state } = useContext(BookContext);

  const [averagePages, setAveragePages] = useState(0);
  let totalPages = 0;

  useEffect(() => {
    setAveragePages(Math.round(totalPages / state.completed.length));
  }, [totalPages]);

  state.completed.forEach((x) => {
    totalPages = totalPages + x.pages;
  });

  const [averageRatings, setAverageRatings] = useState(0);
  let ratings = 0;

  useEffect(() => {
    setAverageRatings(Math.round(ratings / state.completed.length));
  }, [ratings]);

  state.completed.forEach((book) => {
    ratings = ratings + book.rating;
  });

  return { averagePages, totalPages, averageRatings };
};
