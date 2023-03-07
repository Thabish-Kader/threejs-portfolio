import { Html, useProgress } from "@react-three/drei";

const MyLoader = () => {
	const { progress } = useProgress();
	return (
		<Html>
			<div className="h-24 w-24 rounded-full border flex items-center justify-center">
				<p className="text-xl text-[#f1f1f1] ">
					{progress.toFixed(2)}%
				</p>
			</div>
		</Html>
	);
};

export default MyLoader;
