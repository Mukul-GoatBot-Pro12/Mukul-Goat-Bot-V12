module.exports = {
  config: {
    name: "hack",
    version: "1.0.0",
    author: "SK MUKUL BOSS",
    countDown: 10,
    role: 0,
    shortDescription: "Fake hacking prank",
    longDescription: "Send a fake hacking alert for fun",
    category: "fun",
    guide: "{pn}"
  },

  onStart: async function ({ message, event }) {
    const threadID = event.threadID;

    const msg =
      "╔══════════════════╗\n" +
      "       ☠️ SYSTEM ALERT ☠️\n" +
      "╚══════════════════╝\n\n" +
      "⚠️ সতর্কতা! সতর্কতা! ⚠️\n\n" +
      "👾 গ্রুপের সব আইডি স্ক্যান করা হচ্ছে...\n" +
      "🔍 Facebook Security Check: 100%\n" +
      "💻 Connecting to server...\n" +
      "📡 Checking account security...\n\n" +
      "😈 OH NO! YOUR ID HAS BEEN HACKED!\n\n" +
      "😂 আরে ভাই, ভয় পেয়ো না!\n" +
      "এটা শুধু একটা FAKE PRANK MESSAGE! 🤣\n\n" +
      "👑 ADMIN: SK MUKUL BOSS\n" +
      "╔══════════════════╗\n" +
      "      😂 JUST FOR FUN 😂\n" +
      "╚══════════════════╝";

    return message.reply(msg);
  }
};
