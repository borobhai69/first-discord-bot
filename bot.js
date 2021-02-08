require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"]
});

const BOT_PREFIX = '!'
const MOD_ME_COMMAND = 'mod-me'

client.on('messageDelete', msg => {
    msg.channel.send("Stop deleting messages")
})

client.on('ready', () => {
    console.log("Hurray! I made it here!!!")
})

client.on('message', msg => {
    if (msg.content == 'I love football') {
        msg.react("❤️")
    }
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }
})

function modUser(member) {
    member.roles.add("808455603659472946")
}

client.login(process.env.BOT_TOKEN)