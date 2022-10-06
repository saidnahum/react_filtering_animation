import React from "react";
import { motion } from "framer-motion";

const Movie = ({ movie }) => {
   return (
      <motion.div
         className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 shadow-lg p-3 rounded-lg"
         layout
         animate={{ opacity: 1 }}
         initial={{ opacity: 0 }}
         exit={{ opacity: 0 }}
      >
         <h1 className="text-center font-semibold mb-2 text-sm">{movie.original_title}</h1>
         <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" className="h-80 w-full object-cover rounded-lg" />
      </motion.div>
   )
}

export default Movie