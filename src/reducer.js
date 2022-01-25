import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions"; // this is created to cause bugs due to typos of action, so const created in
// action js fiel and now can use the consts without typing over and over again.

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };

    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case REMOVE_STORY:
      const newHits = state.hits.filter(
        (story) => story.objectID !== action.payload
      );

      return {
        ...state,
        hits: newHits,
      };

    default:
      throw new Error(`no matching "${action.type}`);
  }
};
export default reducer;
