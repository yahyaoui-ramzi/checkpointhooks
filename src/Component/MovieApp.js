import React, { useState } from 'react';
import MovieList from './MovieList';
import moviesData from './moviesData';
import Filtre from './Filtre';
import AddModal from './AddModal';



 // filter 
function MovieApp() {
  const [filtredFilms,setFiltredFilms]  = useState (moviesData)
 // addmovie
  const addMovie = (x)=>{
    setFiltredFilms([...filtredFilms,x])
  }
  console.log(filtredFilms)

  //Genre
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };
  
  // Filtrer les films en fonction du genre sélectionné
  const filteredMovies = selectedGenre
    ? filtredFilms.filter((movie) => movie.genre === selectedGenre)
    : filtredFilms;
  


  return (
    <div className="App">
      <div className="App">
  <div>
    {/* Boutons de genre */}
    <button onClick={() => handleGenreClick(null)}>Tous</button>
    <button onClick={() => handleGenreClick('Action')}>Action</button>
    <button onClick={() => handleGenreClick('Horreur')}>Horreur</button>
    <button onClick={() => handleGenreClick('thriller')}>thriller</button>

    {/* Ajoutez d'autres boutons de genre au besoin */}
  </div>

  <Filtre movies={moviesData} setFiltredFilms={setFiltredFilms} />
  <MovieList movies={filteredMovies} />
  <AddModal addMovie={addMovie} />
</div>

    
    </div>
  );
}

export default MovieApp;
