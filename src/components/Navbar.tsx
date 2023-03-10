import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
	const [toggle, setToggle] = useState(true);
	return (
		<nav className="paddingX w-full flex items-center py-5 absolute top-0 z-20 bg-black/30">
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
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
						<span className="sm:block hidden text-sm text-theme tracking-widest">
							| softwareEngineer
						</span>
					</p>
				</Link>

				<div className="hidden lg:flex items-center gap-10">
					<a href="#about">About</a>
					<a href="#work">Journey</a>
					<a href="#contact">Contact</a>
				</div>

				<div className=" hidden sm:flex flex-row gap-3">
					<SocialIcon
						bgColor="#0961b8"
						fgColor="#ffffff"
						style={{ height: 50, width: 50 }}
						target="_blank"
						url="https://www.linkedin.com/in/thabish-a-kader-366447224/"
					/>
					<SocialIcon
						bgColor="#ffffff"
						fgColor="#1c93e4"
						style={{ height: 50, width: 50 }}
						target="_blank"
						url="https://twitter.com/DeveloperTak"
					/>
					<SocialIcon
						bgColor="#000000"
						fgColor="#ffffff"
						style={{ height: 50, width: 50 }}
						target="_blank"
						url="https://github.com/Thabish-Kader"
					/>
					<SocialIcon
						bgColor="#f10002"
						fgColor="#ffffff"
						style={{ height: 50, width: 50 }}
						target="_blank"
						url="https://www.youtube.com/channel/UCv4o5GTLBg2IH2P7iYj1nwQ"
					/>
				</div>
				{/* mobile view */}
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
						} p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className="list-none flex justify-end items-start flex-col gap-4">
							{navLinks.map((link, i) => (
								<li
									key={i}
									className="text-secondary font-poppins font-medium cursor-pointer text-[16px]"
									onClick={() => {
										setToggle(!toggle);
									}}
								>
									<a href={link.link} target="_blank">
										{link.title}
									</a>
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
