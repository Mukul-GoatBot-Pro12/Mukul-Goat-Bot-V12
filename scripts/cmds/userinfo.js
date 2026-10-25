module.exports = {
  config: {
    name: "userinfo",
    aliases: ["uid", "profile"],
    version: "1.1.0",
    author: "SK MUKUL BOSS",
    countDown: 3,
    role: 0,
    shortDescription: "User information",
    category: "info",
    guide: "{pn} @mention"
  },

  onStart: async function ({ api, event, message }) {
    try {
      let uid;

      if (event.mentions && Object.keys(event.mentions).length) {
        uid = Object.keys(event.mentions)[0];
      } else if (event.messageReply) {
        uid = event.messageReply.senderID;
      } else {
        return message.reply(
          "⚠️ একজনকে মেনশন করো অথবা তার মেসেজে রিপ্লাই দাও!"
        );
      }

      const result = await api.getUserInfo(uid);
      const user = result && result[uid];

      if (!user) {
        return message.reply("❌ ব্যবহারকারীর তথ্য পাওয়া যায়নি!");
      }

      const name = user.name || "Unknown";
      const gender = user.gender === 1
        ? "Female"
        : user.gender === 2
          ? "Male"
          : "Unknown";

      const output =
        "╭━━━〔 USER INFO 〕━━━╮\n" +
        `👤 Name: ${name}\n` +
        `🆔 UID: ${uid}\n` +
        `⚧ Gender: ${gender}\n` +
        `🔗 Profile: https://www.facebook.com/${uid}\n` +
        "╰━━━━━━━━━━━━━━━━╯\n" +
        "👑 ADMIN: SK MUKUL BOSS";

      return message.reply(output);
    } catch (err) {
      console.error(err);
      return message.reply(
        "❌ তথ্য পাওয়া যায়নি। Facebook API অথবা বটের সংযোগ পরীক্ষা করো।"
      );
    }
  }
};
