import React from "react";

const AddTagField = (props) => {
	const [value, setValue] = React.useState("");

	const handleChange = (event) => {
		event.preventDefault();
		const tagValue = event.target.value;
		setValue(tagValue);
	};

	const handleSubmit = (event) => {
		console.log(value);
		props.addTag(props.studentID, value);
		setValue("");
		event.preventDefault();
	};

	return (
		<div className="addTag">
			<form onSubmit={handleSubmit}>
				<input
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