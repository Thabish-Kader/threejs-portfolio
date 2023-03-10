import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Works from "./components/Works";
import Tech from "./components/Tech";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import StartsCanvas from "./components/canvas/StarsCanvas";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-slate-900">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
					<Navbar />
					<Hero />
				</div>

				<About />
				<Timeline />
				<Tech />
				<Works />
				<Feedbacks />
				<div className="relative z-0">
					<Contact />
					<StartsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
