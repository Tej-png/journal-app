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
    props.editClick(false);
    props.update(input);
    event.preventDefault();
  }

  
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput((prv) => {
      return {
        ...prv,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleEdit}>
      {props.edit.body ? (
        <>
          <div className="card update-item">
            <div className="card-header">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                placeholder="Update your title"
                onChange={handleChange}
                name="title"
                // ref={inputRef}
                className="form-control title"
              />
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <label htmlFor="body" className="form-label">
                  Content
                </label>
                <textarea
                  placeholder="Update your Content"
                  onChange={handleChange}
                  name="body"
                  // ref={inputRef}
                  className="form-control body"
                />
              </blockquote>
            </div>
            <div className="card-footer">
              <button
                onClick={handleEdit}
                value={input}
                className="btn btn-primary"
              >
                Update
              </button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="card">
            <div className="card-header">{props.title}</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p className="content">{props.body}</p>
              </blockquote>
            </div>
            <div className="card-footer">
              <button
                type="submit"
                className="btn btn-outline-danger card-btn"
                onClick={handleClick}
              >
                Delete
              </button>
              <button
                className="btn btn-outline-primary card-btn"
                onClick={() => {
                  props.setEdit({
                    id: props.id,
                    title: props.title,
                    body: props.body,
                  });
                  props.editClick(true);
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
