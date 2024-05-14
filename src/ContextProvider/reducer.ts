import { State, Action } from "../Types/Types";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET":
      return { ...state, activeBook: { ...action.payload } };

    case "ADD_FAVORITE":
      let test = state.favorites.filter(
        (x) => x.cover_edition_key === action.payload.cover_edition_key
      );

      if (test[0]) {
        return {
          ...state,
          favorites: [
            ...state.favorites.filter(
              (x) => x.cover_edition_key != action.payload.cover_edition_key
            ),
          ],
        };
      } else {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }

    case "ADD_COMPLETE": {
      return { ...state, completed: [...state.completed, action.payload] };
    }

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: [
          ...state.favorites.filter(
            (x) => x.cover_edition_key !== action.payload
          ),
        ],
      };

    case "TOGGLE_AUTHOR_FAVORITE":
      return {
        ...state,
        favorite_authors: [...state.favorite_authors, action.payload],
      };
      return state;

    default:
      break;
  }

  return state;
};
