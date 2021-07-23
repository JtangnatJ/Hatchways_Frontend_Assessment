import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import StudentList from "../StudentList/StudentList.js";
import { fetchStudents } from "../../utils/fetch.js";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchStudents("https://api.hatchways.io/assessment/students")
			.then((response) => {
				console.log(response.students);
				setData(response.students);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="app">
			<div id="AppWrapper">
				<StudentList data={data} />
			</div>
		</div>
	);
}

export default App;
