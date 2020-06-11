const config = require("../config.json");
module.exports = {
    run: function (client, message, args) {
        message.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "Sunghee",
                description: "Sunghee Bot is a fun, customizable Discord bot developed by 1gnite. It includes everything you'd need from moderation tools to fun little gadgets that'll pass the time.",
                fields: [{
                    name: "What Can You Do?",
                    value: "You can do `" + config.prefix + "help` to easily open the commands list and see some cool tricks up Lavender's sleeve."
                }, {
                    name: "Acknowledgements",
                    value: "We love to acknowledge the people who helped aid our development."
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "Seunghee"
                }
            }
        });
    },

    help: {
        name: "about"
    }
};
