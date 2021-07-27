import React from "react";
import "./AddTagField.css";

const AddTagField = (props) => {
	const [value, setValue] = React.useState("");

	const handleChange = (event) => {
		event.preventDefault();
		const tagValue = event.target.value;
		setValue(tagValue);
	};

	const handleSubmit = (event) => {
		props.addTag(props.studentID, value);
		setValue("");
		event.preventDefault();
	};

	return (
		<div className="addTag">
			<form onSubmit={handleSubmit}>
				<input
                    className="addTagInput"
					type="text"
					value={value}
					onChange={handleChange}
					placeholder="Add a tag"
				/>
			</form>
		</div>
	);
};

export default AddTagField;
