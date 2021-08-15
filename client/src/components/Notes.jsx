import React, { useEffect, useRef, useState } from "react";
import "./Notes.css";

const { notes } = require("../data");

function Notes(props) {
  const [input, setInput] = useState([]);
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // },[]);
  function handleClick() {
    props.delete(props.id);
  }

  function handleEdit(event) {

    props.update(input);
    event.preventDefault();
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput(prv => {return {
      ...prv,
      [name]:value
    } })}


  return (
    <form onSubmit={handleEdit}>
      {props.edit.body ? (
        <>
          <input
            placeholder="Update your title"
            onChange={handleChange}
            name="title"
            // ref={inputRef}
            className="title"
          />
          <input
            placeholder="Update your body"
            onChange={handleChange}
            name="body"
            // ref={inputRef}
            className="body"
          />
          <button
            onClick={handleEdit}
            value={input}
            className="btn btn-primary"
          >
            Update
          </button>
        </>
      ) : (
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
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  props.setEdit({
                    id: props.id,
                    title: props.title,
                    body: props.body,
                  });
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}

export default Notes;
