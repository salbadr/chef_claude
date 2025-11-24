import React from 'react';

export default function IngredientsList({ ingredients, handleClick }) {

    const listOfIngredients = ingredients.map((ingredient) => (
        <li>{ingredient}</li>
    ))

    
    return (
       <section>
            <h1>Ingredients on hand:</h1>
            <ul className='ingredients-list' aria-live='polite'>
                {listOfIngredients}
            </ul>
            {ingredients.length > 3 &&<div className='get-recipe-container'>
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button onClick={handleClick}>Get a recipe</button>
            </div>}
        </section>
       
    )
}