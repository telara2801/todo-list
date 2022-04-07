import React, { useState } from "react";

const Mytodo = (props) => {
	const [ListItems, setListItems] = useState([
		"Do the Homework",
		"Car Wash",
		"Clean my Room",
	]);
	const [newTask, setnewTask] = useState("");

	return (
		<div>
			<div className="caja">
				<div className="paper list text-muted">
					<input
						id=""
						className="list"
						placeholder="What needs to be done?"
						value={newTask}
						onChange={(event) => {
							setnewTask(event.target.value);
						}}
						onKeyDown={(event) => {
							if (event.key === "Enter") {
								const newListItems = [...ListItems, newTask];
								setListItems(newListItems);
								setnewTask("");
							}
						}}></input>
					{ListItems.map((task, index) => {
						return (
							<div className="ListItems">
								<ul className="d-flex justify-content-between ">
									<div classname="Items">
										<li
											key={index}
											onClick={() => {}}
											className="Item">
											{task}
										</li>
									</div>
									<div className="">
										<span
											className=""
											onClick={(e) => {
												setListItems(
													ListItems.filter(
														(delTask, delIndex) => {
															if (
																!index ==
																delIndex
															) {
																return false;
															} else {
																return true;
															}
														}
													)
												);
											}}>
											X
										</span>
									</div>
								</ul>
							</div>
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

export default Mytodo;
