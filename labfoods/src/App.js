import './App.css';
import { useState } from 'react';
import Recipes from './components/Recipes/Recipes';
import AddRecipes from './components/AddRecipes/AddRecipes';


function App() {


  return (


    <div className="App">
      <div className='backdrop'/>
      <div className='pageHeader'>
        <header>
          <h1>Livro de receitas Online</h1>
        </header>
      </div>
      <div className='mainContainer'>
          <Recipes />
      </div>
    </div>
  );
}

export default App;
