import React, { useState } from "react";
import "./Form.css"

function Form(props) {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick(event){
    props.onAdd(note)
    setNote({
      title: "",
      body: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={props.submit}>
        <div className="notes-form">
          <label for="title" class="form-label">Title</label>
          <input
            name="title"
            className="form-control form-title"
            type="text"
            placeholder="Title name"
            value={note.title}
            onChange={handleChange}
          ></input>
          <label for="body" class="form-label">Content</label>
          <textarea
            name="body"
            className="form-control form-body"
            value={note.body}
            onChange={handleChange}
          ></textarea>
          <p>
            Use the form above to create a post. Make sure file the required
            title and body fields and the press submit.
          </p>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
