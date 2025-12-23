import serverless from 'serverless-http';
import express from 'express';
import RecipeAPI from '../../recipe-api';

const app = express()

app.use(express.json())
app.post('/api/recipe', async (req, res) => {
    const { body } = req;
    const { ingredients } = body;
    try {
        const recipe = await RecipeAPI.getRecipe(ingredients)

        res.status(200)
        res.json({ recipe });
    }
    catch (err) {
        console.error(err);

        res.status(404);
        res.send('Could not get recipe')
    }

})

export const handler = serverless(app);
