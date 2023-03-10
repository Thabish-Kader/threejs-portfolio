import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";

import BlobCanvas from "./components/canvas/BlobCanvas";

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
				<Projects />
				<Feedbacks />
				<div className="relative z-0">
					<Contact />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
