import { useState } from "react";
import Page from "./Page";
import ieeeSUSTechLogo from "./assets/IEEE-Branch-logo.svg";

const Menu = () => {
	const pages = [
		["Home", 0],
		["Stats", 1],
		["Flags", 2],
		["Rules", 3],
		["Regulations", 4],
		["Suspensions", 5],
	];
	const [pageChoice, setPage] = useState(0);

	window.onload = () => {
		const btn = document.getElementById("navBtn-" + pageChoice);
		btn.classList.remove("border-ieeeBlue");
		btn.classList.add("border-b-white");
		btn.classList.add("text-white");
	};

	return (
		<div className="flex justify-start h-[100vh] w-auto">
			<nav className="h-full w-[10%] bg-ieeeBlue text-slate-300">
				<ul className="flex flex-col gap-11 items-center mt-2">
					<li>
						<img src={ieeeSUSTechLogo} className="w-16" />
					</li>
					<hr className="border-[#00aaff] w-[90%]" />
					{pages.map(([page, id]) => (
						<li
							key={id}
							className="hover:text-white w-full flex justify-center items-center navBtns"
						>
							<button
								id={"navBtn-" + id}
								className="border-b border-ieeeBlue hover:border-b-white transition-all duration-200"
								onClick={() => {
									setPage(id);
									const prevBtn = document.getElementById(
										"navBtn-" + pageChoice
									);
									const curBtn = document.getElementById(
										"navBtn-" + id
									);
									prevBtn.classList.remove("text-white");
									prevBtn.classList.remove("border-b-white");
									prevBtn.classList.add("border-ieeeBlue");
									curBtn.classList.add("text-white");
									curBtn.classList.add("border-b-white");
									curBtn.classList.remove("border-ieeeBlue");
								}}
							>
								{page}
							</button>
						</li>
					))}
				</ul>
			</nav>
			<Page choice={pageChoice} />
		</div>
	);
};

export default Menu;
