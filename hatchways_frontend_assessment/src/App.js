import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import StudentList from "./StudentList.js";

// const axios = require("axios");

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		let mounted = true;
		axios.get("https://api.hatchways.io/assessment/students")
			.then((returnData) => {
				// setData(JSON.stringify(returnData.data.students)); /*data visualization*/
				if (mounted) {
					setData(returnData.data.students);
					mounted = false;
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className = "app">
			<StudentList data={data} />
		</div>
	);
}

export default App;
