module.exports = {
  config: {
    name: "uptime",
    version: "1.0.0",
    author: "SK MUKUL BOSS",
    countDown: 5,
    role: 0,
    shortDescription: "Bot uptime",
    longDescription: "Show bot uptime and system information",
    category: "info",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    const time = Math.floor(process.uptime());

    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const used = process.memoryUsage();
    const ram = (used.rss / 1024 / 1024).toFixed(2);

    const text =
      "╭━━━〔 👑 BOT MONITOR 〕━━━╮\n" +
      "┃ 🤖 BOT: JONI SING BOT TIM\n" +
      "┃ 🟢 STATUS: ONLINE\n" +
      "┣━━━━━━━━━━━━━━━━━━┫\n" +
      `┃ 📅 Days: ${days}\n` +
      `┃ 🕒 Hours: ${hours}\n` +
      `┃ ⏱️ Minutes: ${minutes}\n` +
      `┃ ⚡ Seconds: ${seconds}\n` +
      "┣━━━━━━━━━━━━━━━━━━┫\n" +
      `┃ 💾 RAM Usage: ${ram} MB\n` +
      `┃ 🟢 Node.js: ${process.version}\n` +
      "┃ 👑 ADMIN: SK MUKUL BOSS\n" +
      "╰━━━━━━━━━━━━━━━━━━╯";

    return message.reply(text);
  }
};
