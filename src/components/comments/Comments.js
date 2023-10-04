import React from "react";
import { connect } from "react-redux";
import CommentEntries from "./CommentEntries";
import AddComment from "./AddComment";
import { addComment, removeComment } from "../utils/action";


let Comments = props => {
  const { addComment, comments, removeComment } = props;

  return (
    <div className="container">
      <AddComment addComment={addComment} />
      <CommentEntries comments={comments} removeComment={removeComment} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addComment: (name, date, comment) =>
      dispatch(addComment(name, date, comment)),
    removeComment: id => dispatch(removeComment(id))
  };
};

Comments = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);

export default Comments;
