import axios from "axios"
import React, { useEffect, useState } from "react"
import "./App.css"
import Home from "./components/Home"

function App() {
	return (
		<div className="App">
				<Home></Home>
				{/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<button type="submit" className="btn btn-primary">Send Name</button> */}

		</div>
	)
}

export default App