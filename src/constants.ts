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
import chatbot from "./assets/projects/3dchatbot.png";
import mern from "./assets/projects/mern.png";
import graphql from "./assets/projects/graph ql.png";
import dalle from "./assets/projects/dall-e clone.png";
import testimonial1 from "./assets/testimonial/testimonial1.jpg";

export const navLinks = [
	{
		link: "https://www.linkedin.com/in/thabish-a-kader-366447224/",
		title: "linkedIn",
	},
	{
		link: "https://twitter.com/DeveloperTak",
		title: "Twitter",
	},
	{
		link: "https://github.com/Thabish-Kader",
		title: "Github",
	},
	{
		link: "https://www.youtube.com/channel/UCv4o5GTLBg2IH2P7iYj1nwQ",
		title: "Youtube",
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
			"Really glad I found your video, you explained everything clearly and went about it step by step while explaining why something is done a certain way! Most other videos I could find either used templates or didn't explain why something was used at all. Thanks for making the video! :)",
		name: "Friendliness",
		designation: "Subscriber",
		company: "YouTube",
		image: testimonial1,
		link: "https://www.youtube.com/channel/UC_EQetD_uzO4C9vXXoT4jNw",
	},
	{
		testimonial:
			"Hi Sir! Great video i was exactly looking for some graphql content😀 Can you pls make tutorial on Authentication with graphql on both frontend and backend. Would love to see that",
		name: "The Coder",
		designation: "Subscriber",
		company: "Youtube",
		image: "https://yt3.ggpht.com/ytc/AL5GRJVk4C6Opm5EknIFtiXLZFlf3li0xa2dlqnM4euu8o8-MwGjbUxhVQbKNySOx3MG=s88-c-k-c0x00ffffff-no-rj",
		link: "https://www.youtube.com/channel/UCLr600-2OclKW3ghrzUcO5w",
	},
	{
		testimonial: "Finding this was hard.. worth it..",
		name: "Pranav Babu",
		designation: "Subscriber",
		company: "Youtube",
		image: "https://yt3.googleusercontent.com/ytc/AL5GRJXlSdJdSceW_Zfw92NEv_QHdqVTkVgDhHmWfiD-vQ=s176-c-k-c0x00ffffff-no-rj",
		link: "https://www.youtube.com/channel/UCZsquG9rsHptByCDJh983LQ",
	},
];

export const projects = [
	{
		name: "MERN Course",
		description:
			"Created a course on MERN stack on how to create a full-stack web application using the MERN stack, including database design. I am happy to report that the course has been very well received by viewers! Many viewers have provided positive feedback, stating that they found the course material to be clear, engaging, and informative.",
		tags: [
			{
				name: "MERN",
				color: "text-white",
			},
			{
				name: "state management",
				color: "text-blue-600",
			},
			{
				name: "typescript",
				color: "text-green-600",
			},
		],
		image: mern,
		codeLink:
			"https://github.com/Thabish-Kader/r3f-scroll/tree/main/scroll-based-animaiton",
		live: "https://github.com/Thabish-Kader/phone-book-MERN",
	},
	{
		name: "3D AI Bot",
		description:
			"A 3D AI bot built with React Three Fiber. Interact with the future of AI in a fully immersive and intuitive way. Come and experience it for yourself!",
		tags: [
			{
				name: "react",
				color: "text-blue-500",
			},
			{
				name: "threejs",
				color: "text-white",
			},
			{
				name: "openai",
				color: "text-yellow-500",
			},
			{
				name: "typescript",
				color: "text-green-500",
			},
		],
		image: chatbot,
		codeLink: "https://github.com/Thabish-Kader/3d-chatbot",
		live: "https://3d-chatbot.vercel.app/",
	},
	{
		name: "GraphQl Course",
		description:
			'A "Reddit clone" built using Next.js, Firebase, NextAuth, and GraphQL is a highly scalable, real-time, and dynamic social media website that closely mimics the features and user experience of the original Reddit website.',
		tags: [
			{
				name: "graphql",
				color: "text-pink-500",
			},
			{
				name: "nextjs",
				color: "text-white",
			},
			{
				name: "typescript",
				color: "text-blue-500",
			},
			{
				name: "tailwind",
				color: "text-green-500",
			},
		],
		image: graphql,
		codeLink: "https://github.com/Thabish-Kader/Nextjs13-graphql",
		live: "https://www.youtube.com/watch?v=ufKuYohCt0w&t=3281s",
	},
	{
		name: "DALL-E AI Image generator",
		description:
			"An AI Image generator which uses openAi dalle api to generate images based on user text. This project uses Next JS 13 for api handling and server side rendering for faster image retrieval from the database. You can share the image which updates the database useing prisma or download the image. ",
		tags: [
			{
				name: "Nextjs",
				color: "text-white",
			},
			{
				name: "openAi",
				color: "text-orange-500",
			},
			{
				name: "Prima",
				color: "text-blue-800",
			},
		],
		image: dalle,
		codeLink: "https://github.com/Thabish-Kader/dall-E-nextjs",
		live: "https://www.youtube.com/watch?v=2mXr1TAu06U",
	},
];
