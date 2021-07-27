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

    const tagSearch = (str) => {
        // const taggedStudents = allStudents.filter((student) => {
        //     return student.tags.includes(str);
        // });

        // setFilteredStudents(taggedStudents);
    };

    const addTag = (id, tag) => {
        // allStudents.forEach((student) => {
        //     if (student.id === id) {
        //         student.tag.push(tag);
        //     }
        // })
        console.log('ID: ', id);
        console.log('tag: ', tag);
    }

	return (
		<div className="app">
			<div id="AppWrapper">
				<SearchBar searchHandler={studentSearch} placeholder={"Search by name"} />
				<SearchBar searchHandler={tagSearch} placeholder={"Search by tag"} />
				<StudentList students={filteredStudents || allStudents} addTag={addTag} />
			</div>
		</div>
	);
}

export default App;
