import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Notes from "./Notes";
import Form from "./Form";

function MainSection() {
  const [data, setData] = useState([]);

  async function postName(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/post_name", {
        data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  function addNote(newNote) {
    // const {title, body} = newNote
    setData((prv) => {
      return [...prv, newNote];
    });
  }

  function onDelete(id) {
    setData((prv) => {
      return prv.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  // function onEdit(noteItem){
  //   setData(prv=>{
  //     return prv.filter((noteItem, index){
  //       return noteItem
  //     })
  //   })
  // }

  return (
    <div className="main-container">
      <div className="form-container">
        <h1>
          Digital journal <span>| Create A Note</span>
        </h1>
        <Link to="/signin"><button>Signin</button></Link>
        <Link to="/register"><button>Register</button></Link>
        <Form onAdd={addNote} submit={postName}></Form>
      </div>
      <div className="notes-container">
        <div className="row">
          {data.map((noteItem, index) => {
            return (
              <div className="col-lg-4 col-sm-6">
                <Notes
                  delete={onDelete}
                  note={noteItem}
                  key={index}
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
