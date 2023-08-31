import React, { useState } from 'react';



const Filtre = ({movies , setFiltredFilms }) => {
    const [titleFilter, setTitleFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    
    const filterfilm = () => {
    const filtred = movies.filter ((movie ) =>{
        if (titleFilter ) {
            return movie.title.toLowerCase().includes(titleFilter.toLowerCase())
            
        }
        if (ratingFilter) {
            return movie.rating.includes(ratingFilter)
        }
       
        
        return true;
    } 
    )
    setFiltredFilms (filtred) ;

  
    
    };
  
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Title"
        value={titleFilter}
        onChange={(e) => {setTitleFilter(e.target.value);
          setRatingFilter('')

        }}
      />
      <input
        type="number"
        placeholder="Rating"
        value={ratingFilter}
        onChange={(e) => {setRatingFilter(e.target.value);
        setTitleFilter('')

        }}
      />
      <button onClick={filterfilm}>Filter</button>
      
        {/* Ajoutez d'autres boutons de genre au besoin */}
    </div>
  )
}

export default Filtre