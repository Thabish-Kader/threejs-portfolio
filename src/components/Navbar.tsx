import { styles } from "../styles";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import { logo } from "../assets";
const Navbar = () => {
	const [active, setActive] = useState("");
	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
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
						Thabish{" "}
						<span className="sm:block hidden">
							| Software Engineer
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
			</div>
		</nav>
	);
};

export default Navbar;
