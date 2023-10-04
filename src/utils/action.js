let newComment = 1;

export const addComment = (name, date, comment) => {
  return {
    type: "ADD_COMMENT",
    id: newComment++,
    name,
    date,
    comment
  };
};

export const removeComment = id => {
  return {
    type: "REMOVE_COMMENT",
    payload: { id }
  };
};
