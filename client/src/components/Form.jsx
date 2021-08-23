import React, { useState } from "react";
import "./Form.css"
import axios from "axios";
import { useAuth } from "../context/AuthContext";
function Form(props) {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });
  const { currentUser } = useAuth()

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
    event.preventDefault();
    const newNote = {
      title : note.title,
      body : note. body
    }
    console.log(newNote);
    if (currentUser){
      axios.post('http://localhost:4000/create',{email:currentUser.email, title: newNote.title, body: newNote.body})
    }
    

    setNote({
      title: "",
      body: ""
    });
    
  }

  return (
    <div>
      <form onSubmit={props.submit}>
        <div className="notes-form">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            name="title"
            className="form-control form-title"
            type="text"
            placeholder="Title name"
            value={note.title}
            onChange={handleChange}
          ></input>
          <label htmlFor="body" className="form-label">Content</label>
          <textarea
            name="body"
            className="form-control form-body"
            value={note.body}
            onChange={handleChange}
          ></textarea>
          <p>
            Use the form above to create a post. Make sure fill the required
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
