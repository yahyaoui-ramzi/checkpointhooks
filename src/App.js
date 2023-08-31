import React from 'react';
import MovieApp from './Component/MovieApp';
import './App.css' ;

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
import NavBarr from './Component/NavBarr';
        


function App() {
  return (
    <div className="App">
      <NavBarr />
      <MovieApp />
    </div>
  );
}

export default App;
