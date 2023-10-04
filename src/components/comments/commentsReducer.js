const comments = (state = [], action) => {
    switch (action.type) {
      case "ADD_COMMENT":
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            date: action.date,
            comment: action.comment
          }
        ];
  
      case "REMOVE_COMMENT":
        return state.filter(el => el.id !== action.payload.id);
  
      default:
        return state;
    }
  };
  
  export default comments;