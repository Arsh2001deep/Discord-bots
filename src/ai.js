require('dotenv').config()

const { Client, IntentsBitField } = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    apiKey: process.env.tok,
});
const openai = new OpenAIApi(config);

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],

});

client.login(process.env.tok)

client.on('ready', () => {
    console.log('bot is online ')

})




const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "\"\"\"\nUtil exposes the following:\nutil.openai() -> authenticates & returns the openai module, which has the following functions:\nopenai.Completion.create(\n    prompt=\"<my prompt>\", # The prompt to start completing from\n    max_tokens=123, # The max number of tokens to generate\n    temperature=1.0 # A measure of randomness\n    echo=True, # Whether to return the prompt in addition to the generated completion\n)\n\"\"\"\nimport util\n\"\"\"\nCreate an OpenAI completion starting from the prompt \"Once upon an AI\", no more than 5 tokens. Does not include the prompt.\n\"\"\"\n",
    temperature: 0,
    max_tokens: 2000,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
    stop: ["\"\"\""],
});