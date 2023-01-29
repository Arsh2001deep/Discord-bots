require('dotenv').config()

const { Client, IntentsBitField } = require('discord.js');
const fs = require("node:fs")





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
    let text = message.content.toLowerCase()
    let arr = text.split(' ');
    let data;
    data = fs.readFileSync("./arsh.txt", "utf-8").toLowerCase().split(' ')
    for (let el of arr) {
        if (data.includes(el)) {
            message.reply('jo bolta hai wahi hota hai')
            break
        }
    }
})