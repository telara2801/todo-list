import React from "react";
import Mytodo from "../Mytodo.jsx";

//
//reate your first component
const Home = () => {
	return (
		<>
			<div className=" justify-content-center box1">
				<div>
					<h1 className="text-muted textTodos ">
						<p id="foo">todos</p>
					</h1>
				</div>
				<div className="mainbox">
					<Mytodo />
				</div>
			</div>
		</>
	);
};

export default Home;
