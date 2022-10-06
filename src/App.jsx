import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Movie from "./components/Movie";
import { motion, AnimatePresence } from "framer-motion";

function App() {

	const [popular, setPopular] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [activeGenre, setActiveGenre] = useState(0);

	useEffect(() => {
		fetchPopular()
	}, []);

	const fetchPopular = async () => {
		const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=52366e550def9f544fe0d4ce80659837&language=en-US&page=1");
		const movies = await data.json();

		setPopular(movies.results);
		setFiltered(movies.results);
	};

	return (
		<div className="flex flex-col justify-center items-center container mx-auto">
			<h1 className="mt-5 text-2xl font-bold text-center">Movie Filtering</h1>

			<Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />

			<motion.div layout>
				<div className="grid grid-cols-12 gap-5 p-12 sm:p-20 pt-10">
					{filtered.map(movie => (
						<AnimatePresence>
							<Movie key={movie.id} movie={movie} />
						</AnimatePresence>
					))}
				</div>
			</motion.div>
		</div>
	)
}

export default App
