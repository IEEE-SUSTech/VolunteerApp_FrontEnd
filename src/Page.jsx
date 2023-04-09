import Home from "./Pages/Home";
import Suspensions from "./Pages/Suspensions";
import Regulations from "./Pages/Regulations";
import Rules from "./Pages/Rules";
import Stats from "./Pages/Stats";
import Flags from "./Pages/Flags";
import ieeeSUSTechBlueLogo from "./assets/IEEE-Branch-logo-blue.svg";
const Page = ({ choice }) => {
	return (
		<div className="w-[90%] flex h-full bg-ruaa items-center">
			<div className="flex justify-center items-center bg-slate-100 rounded-3xl w-[97%] h-[90%]">
				{choice == 0 && <Home />}
				{choice == 1 && <Stats />}
				{choice == 2 && <Flags />}
				{choice == 3 && <Rules />}
				{choice == 4 && <Regulations />}
				{choice == 5 && <Suspensions />}
			</div>
		</div>
	);
};

export default Page;
