import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";

import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";

import { HeadCanvas } from "./components/canvas/Head";

import { AppContext, IsPlayingProvider } from "./context/IsPlayingContext";

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
				<IsPlayingProvider>
					<HeadCanvas />
				</IsPlayingProvider>

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
