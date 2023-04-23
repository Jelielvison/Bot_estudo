const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist"),

    async execute(interaction){
        await interaction.reply("https://open.spotify.com/album/5DMmsQoRQSN85hV8XUCajK?si=52INTw3tQdSQ8iorMTr6Pg")
    }
}