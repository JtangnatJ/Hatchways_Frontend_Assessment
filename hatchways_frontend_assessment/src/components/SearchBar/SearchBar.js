import React from "react";
import './SearchBar.css';

const SearchBar = (props) => {
	const [value, setValue] = React.useState("");

	const handleChange = (event) => {
        event.preventDefault();
        const searchTerm = event.target.value;

        setValue(searchTerm);

        props.searchHandler(searchTerm);
    };

	return (
		<div className="Search">
			<input
				type="text"
				value={value}
				onChange={handleChange}
				placeholder="Search by name"
			/>
		</div>
	);
};

export default SearchBar;
