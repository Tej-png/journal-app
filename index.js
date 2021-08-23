const express = require("express");
const { notes } = require("./client/src/data");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://admin-tej:databasepass@journal-app.0szxe.mongodb.net/journalDB"
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


let userEmail = ''
const notesSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const userSchema = new mongoose.Schema({
  email:{type: String, unique: true},
  notes:[{type: mongoose.Schema.Types.ObjectId, ref: 'Note'}]

});



const Note = mongoose.model("Note", notesSchema);

const User = mongoose.model("User", userSchema);

const newNote = new Note({
  title:null,
  content:null

});


app.post("/register", (req, res) => {
  const email = req.body.email;
  const newUser = new User({
    email,
    notes:newNote
  });
  userEmail = email
  console.log('e');
  console.log(userEmail);
  newUser.save();
});

app.get("/", cors(), async (req, res) => {
  res.send("This is working");

});

app.post("/notes",(req, res) => {
  
  userEmail = req.body.email
  console.log('n');
  console.log(userEmail);
});

app.get("/notes", (req, res) => {
  console.log('ns');
  console.log(userEmail);
  User.findOne({email:userEmail}, (err,foundUser) => {
    if(foundUser){
      Note.find({_id:foundUser.notes}, (err, foundNotes) => {
        res.json(foundNotes);
      })
    }
    // userEmail=null
  })
});





// app.get("/login",(req, res) => {

// //   const email = req.body.email
// //   const pass = req.body.password
// //   User.findOne({email:email, password:pass}, (err)=>{
// //     if(err){
//       res.json(err)
//     } else {
//       res.json('login')
//     }
//   })
// });


app.post("/update", async (req, res) => {
  const id = req.body.id;
  const note = req.body.note;
  console.log(note);
  Note.findOneAndUpdate(
    { _id: id },
    { $set: { title: note.title }, content: note.body },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    }
  );
});

app.post("/delete", async (req, res) => {
  const id = req.body.id;
  Note.deleteOne({ _id: id }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
});

app.post("/create", async (req, res) => {
  const title = req.body.title;
  const content = req.body.body;
  const email = req.body.email;
  User.findOne({email:email}, (err, foundUser)=>{
    console.log(foundUser);
    if(foundUser){
      const newNote = new Note({
        title,
        content
      })
      newNote.save()
      foundUser.notes.push(newNote)
      foundUser.save();
    }
  })

  
});
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
