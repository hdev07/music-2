const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invitacion",
  description: "Invita el bot a tu servidor",
  execute(message) {
    const invite = new MessageEmbed()
      .setTitle(`🎁 ¿Quieres invitarme a tu server? 🎁`)
      .setColor("#00C4B3")
      .addFields({
        name: `Da click aqui abajo`,
        value: `[➡ Invitación ⬅](https://discord.com/oauth2/authorize?client_id=862037564985835581&permissions=70282305&scope=bot)`,
        inline: true
      })
      .setTimestamp();
    return message.member.send(invite).catch(console.error);
  }
};
