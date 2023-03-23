import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CourseShowAll } from "./components/course/CourseShowAll";
import React from "react";

function App() {
	return (
		<React.Fragment>
			{/* <CourseShowAll /> */}
			<div className="App">
				<h1>Vite + React</h1>
				<div className="card">
					<button>count is</button>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
			</div>
		</React.Fragment>
	);
}

export default App;
