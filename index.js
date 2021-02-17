const { Client, RichEmbed } = require("discord.js")
const chalk = require("chalk")

const { token, prefix } = require("./config/config.js")

const client = new Client()

const log = console.log

client.on("ready", () => {
  log(chalk.green(`Zalogowano jako ${client.user.tag}!`))
})

client.on("message", (msg) => {
  const { author, guild, channel } = msg

  // Check if user is a bot
  if (author.bot || !guild) {
    return
  }

  // Ignore messages without prefix
  if (!msg.content.startsWith(prefix)) return

  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g)

  const cmd = args.shift().toLowerCase()

  if (cmd === "ping") {
    msg.reply("Pong!")
  }

  if (cmd === "help") {
    const botAuthor = "Herbatnik"
    const botVersion = "Alpha 1.0"
    const botTitle = "Tea Bot - Dowiedz się więcej!"
    const botDescription =
      "Jeśli chcesz wyświetlić pełną listę komend wpisz `!help commadns`, obecnie znajduję się  w fazie Alpha 1.0, obecnie trwają prace nad wersją v1."

    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle(botTitle)
      // Set the color of the embed
      .setColor(0xb348ff)
      // Set the main content of the embed
      .setDescription(botDescription)
      .addField("Autor:", botAuthor, true)
      .addField("Aktualna wersja bota:", botVersion, true)
    channel.send(embed)
  }
})

client.login(token)
