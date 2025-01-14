const fs = require("fs");
module.exports.config = {
	name: "night",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "morning",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("good morning")==0 || event.body.indexOf("good morning")==0 || event.body.indexOf("Gud night")==0 || event.body.indexOf("Gud nini")==0) {
		var msg = {
				body: "G̥ͦO̥ͦO̥ͦD̥ͦ N̥ͦI̥ͦG̥ͦH̥ͦT̥ͦ 🌉✨ 𝔹𝕐𝔼 𝕋ℂ  💫🥀 Sᴡᴇᴇᴛ Dʀᴇᴀᴍs 😴             ★ ° . *　　　°　.　°☆ 　. * . 　　　★ 　° :. ★　 * • ○ ° ★.　 * 　.　 　　　　　.° 　. ● . ★ ° . *　　　°　.　°☆. * ● ¸ . 　　　★ 　° :●. 　 *• ○ ° ★　 .　 * 　.　 　　　　　.° 　. ● . ★ ° . *　　　°　.°☆ 　. * ● ¸ . 　　　★° :. 　 * • ○ ° ★　 .　 * 　　★　　　　. 　 ° 　.  . 　    ★° °☆ 　¸. ● . 　　★　★° . *　　　°　.　°☆ 　. * ● ¸ .★ ° . *　　　°　.　°☆ 　. * ● ¸. 　　　★ 　° :. 　 * • ○ ° ★.　 * 　.　 　★     ° :.☆",
				attachment: fs.createReadStream(__dirname + `/cache/night.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😴", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
