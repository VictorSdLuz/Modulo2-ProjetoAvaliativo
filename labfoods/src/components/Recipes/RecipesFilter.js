import "./RecipesFilter.css";
import React, {useState} from 'react';

function RecipesFilter({recipes, setFilteredRecipes}) {

    const [checked, setChecked] = useState('');
    console.log(checked);

    const submitHandler = (event) => {
        event.preventDefault();
        const filteredRecipes = recipes.filter((recipe)=>{
            if(checked==='lactoses'){
                return (!recipe.lactose)
            }
            if(checked==='glutem'){
                return (!recipe.glutem)
            }
            return (true)
        })
        setFilteredRecipes(filteredRecipes);
    }
    const handleChange = (event) => {
        setChecked(event.target.value)
    }

    return(
        <div>
            <h3>Filtrar:</h3>
            <form onSubmit={submitHandler}>
                <div  className="buttonsContainer">
                    <div>
                        <label htmlFor="lactoses">
                            Sem derivados de leite
                        </label>
                        <input id='lactoses' type="radio" value='lactoses' name="filter" onChange={handleChange} checked={checked==='lactoses'}/>
                    </div>
                    <div>
                        <label htmlFor="glutem">
                            Sem Glútem
                        </label>
                        <input id='glutem' type="radio" value='glutem' name="filter" onChange={handleChange} checked={checked==='glutem'}/>
                    </div>
                    <div>
                        <label htmlFor="all" >
                            Todos
                        </label>
                        <input id='all' type="radio" value='all' name="filter" onChange={handleChange} checked={checked==='all'}/>
                    </div>

                </div>
                
                <button type="submit">Filtro</button>
                
            </form>
        </div>
    )
}

export default RecipesFilter;