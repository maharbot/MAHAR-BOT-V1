module.exports.config = {
  name: "rasgullah", // Command for Rasgullah
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RDX",
  description: "Random Rasgullah image", // Updated description
  commandCategory: "Image",
  usages: "rasgullah", // Updated usage
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
  
  var link = [
    "https://i.imgur.com/A7FmISq.jpeg",
    "https://i.imgur.com/14TjaAP.jpeg",
    "https://i.imgur.com/FGJbsZn.jpeg",
    "https://i.imgur.com/wEF9laI.jpeg"
  ];

  // React with 🤤 emoji
  api.setMessageReaction("🤤", event.messageID, (err) => {}, true);

  // Send the initial message
  api.sendMessage("𝗝𝗜 𝗝𝗜 𝗥𝗔𝗦𝗚𝗨𝗟𝗔𝗛 𝗞𝗔 𝗦𝗛𝗢𝗞 𝗛𝗔𝗜 𝗝𝗡𝗔𝗕 𝗞𝗢 𝗗𝗘𝗧𝗔 𝗛𝗨 𝗥𝗔𝗦𝗚𝗨𝗟𝗔𝗛", event.threadID, () => {
    // Once the initial message is sent, proceed to send the image
    var callback = () => api.sendMessage(
      { body: `MADE BY RDX: ${link.length}`, attachment: fs.createReadStream(__dirname + "/cache/1.jpg") },
      event.threadID,
      () => fs.unlinkSync(__dirname + "/cache/1.jpg"),
      event.messageID
    );

    // Randomly select an image link and download it
    return request(encodeURI(link[Math.floor(Math.random() * link.length)]))
      .pipe(fs.createWriteStream(__dirname + "/cache/1.jpg"))
      .on("close", () => callback());
  });
};
