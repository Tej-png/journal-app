import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Notes from "./Notes";
import Form from "./Form";
import { set } from "mongoose";
import { useAuth } from "../context/AuthContext";
import { signOut } from "./auth";

function MainSection() {
  const [data, setData] = useState([
    {
      _id: "",
      title: "",
      content: "",
    },
  ]);
  const [editClick, setEditClick] = useState(false);
  const [edit, setEdit] = useState({
    id: null,
    title: "",
    body: "",
  });
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      for (var i = 0; i; i++) {
        axios.post("http://localhost:4000/register", {
          email: currentUser.email,
        });
      }
    }
    if (currentUser) {
      axios
        .get("http://localhost:4000/notes")
        .then((response) => {
          // handle success
          return response.data;
        })
        .then((jsonRes) => {
          setData(jsonRes);
        });
    }
  });

  const updateNote = (NoteId, newValue) => {
    if (!newValue.body || /^\s*$/.test(newValue.body)) {
    }
    if (currentUser) {
      axios.post("http://localhost:4000/update", {
        id: NoteId,
        note: newValue,
      });
    }
  };

  function submitUpdate(value) {
    updateNote(edit.id, value);
    setEdit({
      id: null,
      title: "",
      body: "",
    });
  }

  function onDelete(id) {
    if (currentUser) {
      axios.post("http://localhost:4000/delete", { id: id });
    }
  }

  return (
    <div className="main-container">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Digital journal <span>| Create A Note</span>
          </a>
          {currentUser && currentUser.displayName}
          <div class="text" id="navbarText">
            <span class="navbar-text">
              {currentUser ? (
                <button className="btn btn-outline-danger"
                  onClick={() => {
                    signOut();
                    setData([
                      {
                        _id: "",
                        title: "",
                        content: "",
                      },
                    ]);
                  }}
                >
                  sign out
                </button>
              ) : (
                <div>
                  <Link to="/signin">
                    <button className="btn nav-btn">Signin</button>
                  </Link>
                  <Link to="/register">
                    <button className="btn nav-btn">Register</button>
                  </Link>
                </div>
              )}
            </span>
          </div>
        </div>
      </nav>
      <div className="form-container">
        <Form></Form>
      </div>
      <div className="notes-container">
        <div className="row">
          {editClick ? (
            <div className="update-container">
              <Notes
                editId={edit.id}
                update={submitUpdate}
                delete={onDelete}
                edit={edit}
                // onAdd={addNote}
                setEdit={setEdit}
                editClick={setEditClick}
              ></Notes>
            </div>
          ) : (
            data.map((noteItem, index) => {
              return (
                <div className="col-lg-4 col-sm-6">
                  <Notes
                    editId={edit.id}
                    update={submitUpdate}
                    delete={onDelete}
                    note={noteItem}
                    key={index}
                    edit={edit}
                    // onAdd={addNote}
                    setEdit={setEdit}
                    id={noteItem._id}
                    editClick={setEditClick}
                    title={noteItem.title}
                    body={noteItem.content}
                  ></Notes>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default MainSection;
