import React, { useState } from "react";
import PropTypes from "prop-types";

const Mytodo = (props) => {
	const [ListItems, setListItems] = useState([
		"Do the Homework",
		"Car Wash",
		"Clean my Room",
	]);
	const [newTask, setnewTask] = useState([""]);

	return (
		<div className="mainBox">
			<h1 className="textTodos"><p id="foo" ></p>odos</h1>
			<div className="caja">
				<div className="paper list text-muted ">
                     <div className="maininput">
					<input
						className="inputt"
						placeholder="What needs to do done?"
						value={newTask}
						onChange={(event) => {
							setnewTask(event.target.value);
						}}
						onKeyDown={(event) => {
							if (event.key === "Enter") {
								const newListItems = [...ListItems, newTask];
								setListItems(newListItems);
								setnewTask["caracas"];
							}
						}}></input> </div>
					{ListItems.map((task, index) => {
						return (
							<ul>
								<li key={index}>{task}</li>
							</ul>
						);
					})}

					<small className="text-span text-muted">
						{ListItems.length} item left
					</small>
				</div>
			</div>
		</div>
	);
};

//Mytodo.propTypes = {c
//	task: PropTypes.string,
//};
export default Mytodo;

function Task(props) {
	return (
		<li key={props.key}>
			{props.task}
			{props.qty}
		</li>
	);
}

function iTemsList() {
	const [ListItems, setListItems] = useState([
		"Do the Homework",
		"Car Wash",
		"Clean my Room",
	]);

	return (
		<ul>
			{ListItems.map((item, index, array) => (
				<Task key={index} task={item} qyt={2689} />
			))}
		</ul>
	);
}

Task.propTypes = {
	task: PropTypes.string,
	qty: PropTypes.number,
};

iTemsList.propTypes = {
	task: PropTypes.string,
	qty: PropTypes.number,
};
