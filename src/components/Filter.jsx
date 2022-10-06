import React, { useEffect } from 'react'

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {

   useEffect(() => {
      if(activeGenre === 0){
         setFiltered(popular);
         return
      }

      const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
      setFiltered(filtered);
   },[activeGenre]);

   return (
      <div className="flex flex-col sm:flex-row justify-center mt-10  space-y-5 sm:space-y-0 sm:space-x-3">
         <button
            className={`button ${activeGenre == 0 && "bg-blue-800 text-white"}`}
            onClick={() => setActiveGenre(0)}
         >All</button>

         <button
            className={`button ${activeGenre == 35 && "bg-blue-800 text-white"}`}
            onClick={() => setActiveGenre(35)}
         >Comedy</button>

         <button
            className={`button ${activeGenre == 28 && "bg-blue-800 text-white"}`}
            onClick={() => setActiveGenre(28)}
         >Action</button>
      </div>
   )
}

export default Filter