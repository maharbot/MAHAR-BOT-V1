module.exports.config = {
  name: "pratha",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RDX",
  description: "Send a random pratha image",
  commandCategory: "Image",
  usages: "pratha",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args, Users, Threads, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  
  // New links for pratha images
  var link = [
    "https://i.imgur.com/bNWgbZm.jpeg",
    "https://i.imgur.com/JCqYLqa.jpeg",
    "https://i.imgur.com/5te1jLN.jpeg",
    "https://i.imgur.com/ibLk96m.jpeg",
    "https://i.imgur.com/IYm73gd.jpeg",
    "https://i.imgur.com/1pzfeXH.jpeg",
    "https://i.imgur.com/tACKPmt.jpeg"
  ];

  // React with 😋 emoji
  api.setMessageReaction("😋", event.messageID, (err) => {}, true);

  // Fun and relatable message
  api.sendMessage(
    "𝗪𝗔𝗛 𝗝𝗔𝗡𝗔𝗕! 🤩\n𝗔𝗝 𝗧𝗢𝗛 𝗣𝗥𝗔𝗧𝗛𝗘 𝗦𝗘 𝗠𝗢𝗛𝗔𝗕𝗕𝗔𝗧 𝗞𝗔 𝗠𝗢𝗢𝗗 𝗛𝗘! 🫓\n𝗕𝗦 𝗔𝗕𝗛𝗜 𝗔𝗥𝗛𝗘 𝗛𝗔𝗜 𝗞𝗔𝗥𝗔𝗥𝗘 𝗣𝗥𝗔𝗧𝗛𝗘, 𝗝𝗜𝗘 𝗔𝗨𝗥 𝗔𝗡𝗝𝗢𝗬 𝗞𝗜𝗝𝗜𝗬𝗘! 🥰",
    event.threadID,
    () => {
      // Send the image after the message
      var callback = () => api.sendMessage(
        { body: `𝗠𝗔𝗗𝗘 𝗕𝗬 𝗥𝗗𝗫: ${link.length} 𝗣𝗥𝗔𝗧𝗛𝗔 𝗜𝗠𝗔𝗚𝗘𝗦 𝗦𝗘𝗥𝗩𝗘𝗗!`, attachment: fs.createReadStream(__dirname + "/cache/1.jpeg") },
        event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.jpeg"),
        event.messageID
      );

      // Randomly select a pratha image and download it
      return request(encodeURI(link[Math.floor(Math.random() * link.length)]))
        .pipe(fs.createWriteStream(__dirname + "/cache/1.jpeg"))
        .on("close", () => callback());
    }
  );
};
