import React from "react";
import Student from "../Student/Student.js";
import "./StudentList.css";

const StudentList = (props) => (
	<div id="StudentList">
		{props.students.map((student, index) => (
			<Student student={student} key={index} addTag={props.addTag} />
		))}
	</div>
);

export default StudentList;
