export const searchReducer = (state = { text: "" }, action) => {
  console.log("Search text",state)
  switch (action.type) {
    case "SEARCH_QUERY":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
