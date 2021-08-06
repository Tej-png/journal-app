const express = require("express")
const {notes} = require('./data')
const app = express()
const port = 4000
const cors = require("cors")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get("/", cors(), async (req, res) => {
	res.send("This is working")
})
app.get("/home", cors(), async (req, res) => {
	res.send("This is the data for the home page")
})

app.post("/post_name", async (req, res) => {
	const {title, body} = req.body.data
	notes.push({title:title,
	body:body})
	console.log(notes)
})
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})