module.exports = {
	run: function (client, message, args) {
		message.channel.send("(╯°□°)╯  ︵  ┻━┻").then(m => {
			setTimeout(() => {
				m.edit("(╯°□°)╯    ]").then(ms => {
					setTimeout(() => {
						ms.edit("(°-°)\\ ┬─┬");
					}, 500);
				});
			}, 500);
		});
	},

	help: {
		name: "uf"
	}
};
