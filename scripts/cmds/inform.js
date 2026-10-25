module.exports = {
  config: {
    name: "inform",
    version: "1.0.0",
    author: "SK MUKUL BOSS",
    countDown: 5,
    role: 0,
    shortDescription: "Group information",
    longDescription: "Show group information",
    category: "box chat",
    guide: "{pn}"
  },

  onStart: async function ({ api, event, message }) {
    try {
      const threadID = event.threadID;

      const info = await api.getThreadInfo(threadID);

      const admins = info.adminIDs || [];
      const adminIDs = admins.map(item =>
        typeof item === "string" ? item : item.id
      );

      const text =
        "╭─────〔 GROUP INFO 〕─────╮\n" +
        `│ 👑 Group Name: ${info.threadName || "Unknown"}\n` +
        `│ 🆔 Group ID: ${threadID}\n` +
        `│ 👥 Members: ${info.participantIDs?.length || 0}\n` +
        `│ 🛡️ Admins: ${adminIDs.length}\n` +
        "╰────────────────────╯\n\n" +
        "👑 ADMIN: SK MUKUL BOSS";

      return message.reply(text);
    } catch (error) {
      console.error(error);
      return message.reply(
        "❌ Group information আনতে সমস্যা হয়েছে।"
      );
    }
  }
};
