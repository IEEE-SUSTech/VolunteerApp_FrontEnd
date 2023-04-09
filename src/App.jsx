import { useState } from "react";
import "./App.css";
import Logo from "./Logo";

function App() {
	const [logo, setLogo] = useState("both");
	const [counter, setCounter] = useState(0);
	console.log("Hello there");

	return (
		<div className="App">
			<Logo type={logo} />
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCounter(count => count + 1)}>
					count is {counter}
				</button>
				{/* <button onClick={() => setLogo("react")}>React</button>
				<button onClick={() => setLogo("vite")}>Vite</button>
				<button onClick={() => setLogo("both")}>Both</button> */}
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
