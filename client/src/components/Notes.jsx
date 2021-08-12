import React from "react";
import "./Notes.css";

const { notes } = require("../data");

function Notes(props) {
  function handleClick() {
    props.delete(props.id);
  }

  return (
    <div>
        <div className="card">
          <div className="card-header">{props.title}</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{props.body}</p>
            </blockquote>
          </div>
          <div className="card-footer">
            <button
              type="submit"
              className="btn btn-outline-danger"
              onClick={handleClick}
            >
              Delete
            </button>
          </div>
        </div>
    </div>
  );
}

export default Notes;
