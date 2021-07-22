import React from "react";
import Student from "../Student/Student.js";
import "./StudentList.css";

const StudentList = (props) => (
	<div id="StudentList">
		{props.data.map((student, index) => (
			<Student student={student} key={index} />
		))}
	</div>
);

export default StudentList;
