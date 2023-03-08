import comp from "./assets/computer.png";
import light from "./assets/light.png";
import openSource from "./assets/openSource.png";
import contentCreator from "./assets/contentCreator.png";
import mec from "./assets/mec.png";
import frontEnd from "./assets/frontend.png";
import google from "./assets/google.webp";
import prisma from "./assets/prisma.webp";
import fullstack from "./assets/fullstack.png";
import yt from "./assets/yt.svg";
import next from "./assets/next.svg";
import html from "./assets/tech/html.png";
import three from "./assets/three2.png";
import css from "./assets/tech/css.png";
import javascript from "./assets/tech/javascript.png";
import nodejs from "./assets/tech/nodejs.png";
import reactjs from "./assets/tech/reactjs.png";
import redux from "./assets/tech/redux.png";
import tailwind from "./assets/tech/tailwind.png";
import threejs from "./assets/tech/threejs.svg";
import typescript from "./assets/tech/typescript.png";
import git from "./assets/tech/git.png";

import { carrent, jobit, tripguide } from "./assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

export const services = [
	{
		title: "Web Developer",
		icon: comp,
	},
	{
		title: "Creative Developer",
		icon: light,
	},
	{
		title: "Open Source Enthusiast",
		icon: openSource,
	},
	{
		title: "Content Creator",
		icon: contentCreator,
	},
];

export const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Next JS",
		icon: next,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Prisma",
		icon: prisma,
	},
	{
		name: "Three JS",
		icon: three,
	},
	{
		name: "git",
		icon: git,
	},
];

export const experiences = [
	{
		title: "Bachelors in Computer Science (Hons)",
		company_name: "MEC",
		icon: mec,
		iconBg: "#383E56",
		date: "Oct 2019 - Jun 2023",
		points: [
			"Understood core computer science concepts: Such as algorithms and data structures, computer architecture, operating systems, programming languages, and software engineering principles",
			"Got proficient in programming languages: Such as Java, Python, C++",
			"Acquired the ability to design and develop software systems",
			"Understood the importance of software development methodologies:",
		],
	},
	{
		title: "Google Data Analytics Program",
		company_name: "Google",
		icon: google,
		iconBg: "#E6DEDD",
		date: "Jan 2022 - Feb 2022",
		points: [
			"Learnt data analysis fundamentals",
			"Implemented statistics and probability",
			"Used data visualization techniques to get an insight on data",
			"Used data to get business analytics",
		],
	},
	{
		title: "Front End Projects",
		company_name: "Self",
		icon: frontEnd,
		iconBg: "#383E56",
		date: "Feb 2022 - Oct 2022",
		points: [
			"TypeScript: Defined types and generics for better code organization and safety",
			"React: Created and managed components with hooks and context, and used  features like Suspense and state management",
			"Next.js: Configured dynamic routing and data sources, optimizing website performance, and using advanced features like Incremental Static Regeneration and Preview Mode.",
			"Tailwind CSS: Created responsive and custom styles with a utility-first approach, and optimizing website performance with built-in features like variants and plugins.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Self",
		icon: fullstack,
		iconBg: "#E6DEDD",
		date: "Oct 2022 - present",
		points: [
			"Firebase: Configured and used Firebase services like Authentication, Firestore, and Cloud Functions to implement real-time data synchronization and host and deploy your application.",
			"Express: Created and managed REST APIs, implementing authentication and authorization, and using middleware to handle common tasks.",
			"Prisma: Defined data models and relationships, using Prisma Client to query and mutate data, and implementing database migrations.",
			"PostgreSQL: Set up and configed a PostgreSQL database, using SQL to query and manipulate data, and optimizing database performance.",
		],
	},
	{
		title: "YouTube Creator",
		company_name: "YouTube",
		icon: yt,
		iconBg: "#E6DEDD",
		date: "Dec 2022 - present",
		points: [
			"Giving back to the community",
			"Created coding tutorials",
			"Broke down complex topics",
			"Building a community",
			"YouTube Link : https://www.youtube.com/channel/UCv4o5GTLBg2IH2P7iYj1nwQ",
		],
	},
	{
		title: "Three Js Developer / React Three Fiber",
		company_name: "Self",
		icon: threejs,
		iconBg: "#E6DEDD",
		date: "Feb 2022 - present",
		points: [
			"Integrate Three.js and React Three Fiber with other web technologies, such as React and WebGL to create complex and interactive 3D websites.",
			"Creating and manipulating 3D objects in web ",
			"Worked with 3D space and camera controls",
			"Implemented lighting and shading",
		],
	},
];

export const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

export const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		codeLink: "https://github.com/",
		live: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		codeLink: "https://github.com/",
		live: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		codeLink: "https://github.com/",
		live: "https://github.com/",
	},
];
