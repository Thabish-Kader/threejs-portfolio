import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import { logo, menu, close } from "../assets";
const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(true);
	return (
		<nav className="paddingX w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img
						src={logo}
						alt="logo"
						className="w-14 h-14 object-contain "
					/>
					<p className="text-white text-[18px] font-bold cursor-pointer">
						Thabish &nbsp;
						<span className="sm:block hidden text-sm text-red-600  tracking-widest">
							| softwareEngineer
						</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title
									? "text-red-500"
									: "text-secondary"
							} hover:text-red-500 text-[18px]`}
							onClick={() => setActive(link.title)}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
				{/* mobile view */}
				{/* TODO: Change the styling of background of mobile view */}
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? menu : close}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							toggle ? "hidden" : "flex"
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className="list-none flex justify-end items-start flex-col gap-4">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title
											? "text-red-500"
											: "text-secondary"
									} font-poppins font-medium cursor-pointer text-[16px]`}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
