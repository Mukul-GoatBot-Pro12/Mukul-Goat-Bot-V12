module.exports = {
  config: {
    name: "welcome",
    version: "1.0.0",
    author: "SK MUKUL BOSS",
    countDown: 5,
    role: 1,
    shortDescription: "Welcome settings",
    longDescription: "Enable or disable welcome messages",
    category: "box chat",
    guide: "{pn} on/off"
  },

  onStart: async function ({ args, message, event, threadsData }) {
    const threadID = event.threadID;
    const status = args[0]?.toLowerCase();

    if (!["on", "off"].includes(status)) {
      return message.reply(
        "⚙️ Welcome Settings\n\n" +
        "✅ চালু করতে: welcome on\n" +
        "❌ বন্ধ করতে: welcome off"
      );
    }

    await threadsData.set(threadID, status === "on", "settings.sendWelcomeMessage");

    return message.reply(
      status === "on"
        ? "✅ Welcome message চালু করা হয়েছে!"
        : "❌ Welcome message বন্ধ করা হয়েছে!"
    );
  }
};
