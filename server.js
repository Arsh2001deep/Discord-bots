require('dotenv').config()

const { Client, IntentsBitField, messageLink } = require('discord.js');




const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],

});


client.login(process.env.token)

client.on('ready', () => {
    console.log('bot is online')

})
client.on("messageCreate", (message) => {
    if (message.content == "hi") { message.reply("hello") }
})