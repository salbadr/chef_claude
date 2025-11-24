import React from "react";

export default function AddIngredientsForm({ setIngredients }) {

    function addIngredient(formData) {
        setIngredients((prev) => [...prev, formData.get('ingredient')])

    }
    return (

        <form className="add_ingredients_form" action={addIngredient}>
            <input
                type="text"
                placeholder="e.g oregano"
                aria-label="Add Ingredient"
                name="ingredient"
            />
            <button type="submit">Add Ingredient</button>
        </form>
    )

}