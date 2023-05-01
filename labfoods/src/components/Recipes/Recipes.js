import "./Recipes.css";
import RecipesFilter from "./RecipesFilter";
import AddRecipes from "../AddRecipes/AddRecipes";
import { useState } from "react";

function Recipes() {

    const [recipes, setRecipes] = useState([]);
    
    const [filteredRecipes, setFilteredRecipes] = useState(recipes)

    return (    
        <div className="container">
            <div className ="containerFilter">
                <RecipesFilter recipes={recipes} setFilteredRecipes={setFilteredRecipes}/>
            </div>
            <div className="containerRecipes">
                <h2>Receitas Cadastradas:</h2>
                <ul>
                    {filteredRecipes.map((recipe, index) => {
                        return (
                            <li key={index}>
                                {recipe.title}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="AddRecipes">
                <AddRecipes setRecipes={setRecipes}/>
            </div>
        </div>
    )

};

export default Recipes;

