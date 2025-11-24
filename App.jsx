import React, { useState } from "react";
import Header from "./components/Header";
import AddIngredientsForm from "./components/AddIngredientsForm";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";
import axios from "axios";
export default function App() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState('')
    const [loading, setLoading] = useState(false);

    async function getRecipe() {
        const result = await axios.post('http://localhost:3000/api/recipe', { ingredients }, { timeout: 60000 })

        return result.data.recipe

    }
    async function handleClick() {
        setLoading(true);
        if (recipe !== '') {
            setRecipe('')
        }

        const recipeMarkdown = await getRecipe()
        setRecipe(recipeMarkdown)
        setLoading(false);

    }

    return (
        <>
            <Header />
            <main className="container">
                <AddIngredientsForm setIngredients={setIngredients} />
                {ingredients.length > 0 && <IngredientsList ingredients={ingredients} handleClick={handleClick} />}
                {loading && <h2>Loading...</h2>}
                {recipe !== '' && <ClaudeRecipe recipe={recipe} />}
            </main>

        </>
    )
}