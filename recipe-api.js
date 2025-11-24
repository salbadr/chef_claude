
const OpenAI = require("openai");

class RecipeAPI {

    static #apiKey = process.env.OPENAI_API_KEY;

    static client = new OpenAI({ apiKey: this.#apiKey, dangerouslyAllowBrowser: true });

    static async getRecipe(ingredientsArray) {
        const ingredientsString = ingredientsArray.join(',');

        const instructions = `
You are an assistant that receives a list of ingredients that a 
user has and suggests a recipe they could make with some or all 
of those ingredients. You don't need to use every ingredient they 
mention in your recipe. The recipe can include additional ingredients they didn't mention, 
but try not to include too many extra ingredients. Format your response in markdown to make it 
easier to render to a web page`
        const response = await this.client.responses.create({
            model: "gpt-5-nano",
            instructions,
            input: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`
        });

        return response.output_text
    }
}


module.exports = RecipeAPI
