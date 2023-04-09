import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const Logo = ({ type }) => {
	if (type == "vite") {
		return (
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
			</div>
		);
	} else if (type == "react") {
		return (
			<div>
				<a href="https://reactjs.org" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
		);
	}
	return (
		<div>
			<a href="https://vitejs.dev" target="_blank">
				<img src={viteLogo} className="logo" alt="Vite logo" />
			</a>
			<a href="https://reactjs.org" target="_blank">
				<img src={reactLogo} className="logo react" alt="React logo" />
			</a>
		</div>
	);
};

export default Logo;
