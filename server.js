require('dotenv').config()
const cors = require('cors');

const express = require('express');
const RecipeAPI = require('./recipe-api');
const PORT = process.env.PORT;
const app = express()
app.use(cors(
    {
        origin: ['http://localhost:5173', 'http://127.0.0.1:5173'] // Allow requests from this origin only
    }
))

app.use(express.json())
app.post('/api/recipe', async (req, res) => {
    req.setTimeout(120000); // 2 minutes for this request
    res.setTimeout(120000); // 2 minutes for this response
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

app.listen(PORT, '0.0.0.0', () => {
    console.log('AI Recipe Server listening at port', PORT)
})
