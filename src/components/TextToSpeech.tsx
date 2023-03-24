import React, { FormEvent, useContext, useState } from "react";
import yt from "../public/yt.webp";
import { AppContext } from "../context/IsPlayingContext";

export const TextToSpeech = () => {
	const [userText, setUserText] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { isPlaying, setIsPlaying } = useContext(AppContext);
	const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
	const voices = synth?.getVoices();

	const seletedVoice = voices?.find((voice) => voice.name === "Albert"); // Other voice that sounds good Karen, Tessa, Trinoids

	const speak = (username: string) => {
		if (userText === "") return alert("Please enter your name");
		const utterance = new SpeechSynthesisUtterance(
			`Welcome to my portfolio ${username}.... As a full stack developer, I specialize in creating visually stunning projects using cutting-edge technologies such as React and Three.js.`
		);
		utterance.rate = 0.2;
		utterance.voice = seletedVoice!;

		synth?.speak(utterance);
		setIsPlaying(true);
		utterance.onend = () => {
			setIsPlaying(false);
		};
		setUserText("");
	};

	return (
		<div className="absolute top-[800px] left-[10%] lg:left-[30%]  space-x-2 pt-2 z-50 ">
			<input
				type="text"
				value={userText}
				className="bg-transparent border border-[#b00c3f]/80 outline-none  rounded-lg placeholder:text-[#b00c3f] p-2 text-[#b00c3f]"
				onChange={(e) => setUserText(e.target.value)}
				placeholder="Enter your name"
			/>
			<button
				onClick={() => speak(userText)}
				disabled={isLoading}
				className="text-[#b00c3f] p-2 border border-[#b00c3f] rounded-lg disabled:text-blue-100 disabled:cursor-not-allowed disabled:bg-gray-500 hover:scale-110 hover:bg-[#b00c3f] hover:text-black duration-300 transition-all"
			>
				{isLoading ? "thinking..." : "Ask"}
			</button>
		</div>
	);
};
