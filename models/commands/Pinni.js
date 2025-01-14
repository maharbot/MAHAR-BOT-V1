module.exports.config = {
  name: "pinni", // Command for Pinni
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RDX",
  description: "Random Pinni image", // Updated description
  commandCategory: "Image",
  usages: "pinni", // Updated usage
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
    "https://i.imgur.com/PbdvC9f.jpeg",
    "https://i.imgur.com/uMI7l4l.jpeg",
    "https://i.imgur.com/0qnfqKT.jpeg",
    "https://i.imgur.com/mLrgOqv.jpeg"
  ];

  // React with 🤤 emoji
  api.setMessageReaction("🤤", event.messageID, (err) => {}, true);

  // Send the initial message
  api.sendMessage("𝗝𝗜 𝗝𝗜 𝗣𝗜𝗡𝗡𝗜 𝗞𝗔 𝗦𝗛𝗢𝗞 𝗛𝗔𝗜 𝗝𝗡𝗔𝗕 𝗞𝗢 𝗗𝗘𝗧𝗔 𝗛𝗨 𝗣𝗜𝗡𝗡𝗜", event.threadID, () => {
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
