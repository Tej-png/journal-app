import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Notes from "./Notes";
import Form from "./Form";
import { set } from "mongoose";

function MainSection() {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState({
    id:null,
    title:"",
    body: "",
  });

  async function postName(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/", {
        data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  function addNote(newNote) {
    setData((prv) => {
      return [...prv, newNote];
    });
  }



  const updateNote = (NoteId, newValue) => {
    if (!newValue.body || /^\s*$/.test(newValue.body)) {
      console.log(newValue);
    }
    setData(prev => prev.map((item,index) => (index === NoteId ? newValue : item)));
  };


  function submitUpdate(value){
    updateNote(edit.id, value)
    setEdit({
      id:null,
      title:'',
      body:''
    })
  }

  function onDelete(id) {
    setData((prv) => {
      return prv.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function handleChange(e){
    const {value, name} = e.target
    setData(prv => {
      return {
        ...prv,
        [name]:value
      }
    })

  }



  return (
    <div className="main-container">
      <div className="form-container">
        <h1>
          Digital journal <span>| Create A Note</span>
        </h1>
        <Link to="/signin">
          <button>Signin</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Form onAdd={addNote} submit={postName}></Form>
      </div>
      <div className="notes-container">
        <div className="row">
          {data.map((noteItem, index) => {
            console.log(noteItem)
            return (
              <div className="col-lg-4 col-sm-6">
                <Notes
                  editId={edit.id}
                  update={submitUpdate}
                  delete={onDelete}
                  note={noteItem}
                  key={index}
                  edit={edit}
                  onAdd={addNote}
                  setEdit={setEdit}
                  id={index}
                  title={noteItem.title}
                  body={noteItem.body}
                ></Notes>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainSection;
