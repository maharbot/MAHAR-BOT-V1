module.exports.config = {
  name: "popcorn",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RDX",
  description: "Send a random popcorn image",
  commandCategory: "Image",
  usages: "popcorn",
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
  
  // Updated links for popcorn images
  var link = [
    "https://i.imgur.com/9zaevgl.jpeg",
    "https://i.imgur.com/ACqOBii.jpeg",
    "https://i.imgur.com/lX5hjym.jpeg",
    "https://i.imgur.com/J62JXaB.jpeg"
  ];

  // React with 🍿 emoji
  api.setMessageReaction("🍿", event.messageID, (err) => {}, true);

  // Fun and relatable message
  api.sendMessage(
    "𝗪𝗔𝗛 𝗝𝗔𝗡𝗔𝗕! 🤩\n𝗣𝗢𝗣𝗖𝗢𝗥𝗡 𝗞𝗘 𝗦𝗔𝗔𝗧𝗛 𝗠𝗢𝗩𝗜𝗘 𝗠𝗢𝗢𝗗 𝗕𝗔𝗡𝗔𝗬𝗘! 🍿\n𝗝𝗨𝗦𝗧 𝗘𝗡𝗝𝗢𝗬 𝗧𝗛𝗘 𝗠𝗢𝗠𝗘𝗡𝗧! 🥰",
    event.threadID,
    () => {
      // Send the image after the message
      var callback = () => api.sendMessage(
        { body: `𝗠𝗔𝗗𝗘 𝗕𝗬 𝗥𝗗𝗫: ${link.length} 𝗣𝗢𝗣𝗖𝗢𝗥𝗡 𝗜𝗠𝗔𝗚𝗘𝗦 𝗦𝗘𝗥𝗩𝗘𝗗!`, attachment: fs.createReadStream(__dirname + "/cache/1.jpeg") },
        event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.jpeg"),
        event.messageID
      );

      // Randomly select a popcorn image and download it
      return request(encodeURI(link[Math.floor(Math.random() * link.length)]))
        .pipe(fs.createWriteStream(__dirname + "/cache/1.jpeg"))
        .on("close", () => callback());
    }
  );
};
