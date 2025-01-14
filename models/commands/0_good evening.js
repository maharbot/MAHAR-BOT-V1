const axios = require('axios'); // Ensure axios is installed via npm

if (event.body.toLowerCase() === "good evening") {
    const imageUrl = "https://i.imgur.com/U0qEtHd.jpeg";

    axios.get(imageUrl, { responseType: 'arraybuffer' })
        .then(response => {
            const imageBuffer = Buffer.from(response.data, "binary");
            const message = {
                body: "Good Evening! I hope you’re having a wonderful time.",
                attachment: [imageBuffer]
            };
            return api.sendMessage(message, threadID);
        })
        .catch(error => {
            console.error("Error fetching the image:", error);
            return api.sendMessage("Good Evening! But I couldn't fetch the image. Sorry!", threadID);
        });
}
