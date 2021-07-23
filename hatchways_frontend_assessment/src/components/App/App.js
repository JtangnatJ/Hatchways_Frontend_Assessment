import React, { useEffect, useState } from "react";
import "./App.css";
import StudentList from "../StudentList/StudentList.js";
import { fetchStudents } from "../../utils/fetch.js";
import SearchBar from "../SearchBar/SearchBar.js";

function App() {
	const [allStudents, setAllStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState(null);

	useEffect(() => {
		fetchStudents()
			.then((response) => {
                setAllStudents(response);
            })
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const studentSearch = (string) => {
        const foundStudents = allStudents.filter((student) => {
            return student.fullName.includes(string.toUpperCase());
        });

        setFilteredStudents(foundStudents);
	};

	return (
		<div className="app">
			<div id="AppWrapper">
				<SearchBar searchHandler={studentSearch} />
				<StudentList students={filteredStudents || allStudents} />
			</div>
		</div>
	);
}

export default App;
