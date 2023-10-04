import React from "react";

const CommentEntries = props => {
  const { comments, removeComment } = props;
  return (
    <div>
      {comments.map(comm => {
        return (
          <section key={comm.id} className="CommentEntries">
            <div className="nameSection">
              {comm.name} {comm.date}
            </div>
            <div className="CommentEntries">{comm.comment}</div>
            <button
              className="deleteBtn"
              onClick={ev => removeComment(comm.id)}
            >
              Delete
            </button>
          </section>
        );
      })}
    </div>
  );
};

export default CommentEntries;