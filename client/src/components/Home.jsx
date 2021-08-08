import React from "react";
import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Notes from "./Notes";
import Form from "./Form";
import { notes } from "../data";

function Home(params) {
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
    console.log(newNote);
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
    <div class="main-container">
      <div className="form-container">
        <h1>
          Digital journal <span>| Create A Note</span>
        </h1>
        <Form onAdd={addNote} submit={postName}></Form>
      </div>
      <div className="notes-container">
        <div class="row">
          {data.map((noteItem, index) => {
            return (
              <div class="col-lg-4 col-sm-6">
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

export default Home;
