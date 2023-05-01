import "./AddRecipes.css";
import { useState } from "react";


const AddRecipes = ({setRecipes}) => {


    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredIngredients, setEnteredIngredients] = useState('');
    const [enteredPreparation, setEnteredPreparation] = useState('');
    const [entenredLactose, setEnteredLactose] = useState(false);
    const [enteredGlutem, setEntenredGlutem] = useState(false);

    const ingredientsChangeHandler = (event) => {
        setEnteredIngredients(event.target.value);
    };

    const preparationChangeHandler = (event) => {
        setEnteredPreparation(event.target.value);
    };

    const lactoseChangeHandler = (event) => {
        setEnteredLactose(event.target.checked);
    };

    const glutemChangeHandler = (event) => {
        setEntenredGlutem(event.target.checked);
    };

    const [showPopup, setShowPopup] = useState(false);

    const handlePopupToggle = () => {
      setShowPopup(!showPopup);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const newRecipe = {
            title: enteredTitle,
            ingrediente: enteredIngredients,
            preparation: enteredPreparation,
            lactose: entenredLactose,
            glutem: enteredGlutem
        }

        setRecipes(prevState => ([...prevState, newRecipe]))
    }
  
    return (
      <div className="addButtonContainer">
        <button onClick={handlePopupToggle} className="addButton">+</button>
        {showPopup && (
            <div className="modal" id="modal">
                <div className="modalHeader">
                    <div className="title">Adicionar Receita</div>
                    <button onClick={handlePopupToggle} className="closeButton">&times;</button>
                </div>
                <form className="modalBody" onSubmit={submitHandler}>
                    <div className="newRecipeControls">
                        <div className="newRecipeControl">
                            <label>Nome</label>
                            <input type='text' value={enteredTitle} onChange={e => {setEnteredTitle(e.target.value);}}/>
                        </div>
                        <div className="newRecipeControl">
                            <label>Ingredientes</label>
                            <input type='text' value={enteredIngredients} onChange={ingredientsChangeHandler}/>
                        </div>
                        <div className="newRecipeControl">
                            <label>Preparação</label>
                            <input type='text' value={enteredPreparation} onChange={preparationChangeHandler}/>
                        </div>
                        <div className="newRecipeControlCheckbox">
                            <label>Lactose</label>
                            <input type='checkbox' onChange={lactoseChangeHandler}/>
                        </div>
                        <div className="newRecipeControlCheckbox">
                            <label>Glutem</label>
                            <input type='checkbox' onChange={glutemChangeHandler}/>
                        </div>
                    </div>
                    <div className="newRecipeActions">
                        <button type="submit">Adicionar Receita</button>
                    </div>
                </form>
            </div>
        )}
      </div>
    );
}

export default AddRecipes;
