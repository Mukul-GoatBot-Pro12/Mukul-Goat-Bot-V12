module.exports = {
  config: {
    name: "userinfo",
    aliases: ["uid", "profile"],
    version: "1.0.0",
    author: "SK MUKUL BOSS",
    countDown: 5,
    role: 0,
    shortDescription: "User information",
    longDescription: "Show available user information",
    category: "info",
    guide: "{pn} @mention"
  },

  onStart: async function ({ api, event, message }) {
    try {
      let uid;

      // Detect mentioned user
      if (event.mentions && Object.keys(event.mentions).length > 0) {
        uid = Object.keys(event.mentions)[0];
      } else if (event.type === "message_reply" && event.messageReply) {
        uid = event.messageReply.senderID;
      } else {
        uid = event.senderID;
      }

      const getUserInfo = () =>
        new Promise((resolve, reject) => {
          api.getUserInfo(uid, (err, data) => {
            if (err) return reject(err);
            resolve(data);
          });
        });

      const users = await getUserInfo();
      const user = users[uid];

      if (!user) {
        return message.reply(
          "❌ ব্যবহারকারীর তথ্য পাওয়া যায়নি।"
        );
      }

      const name = user.name || "Unknown";
      const gender =
        user.gender === 1 ? "Female" :
        user.gender === 2 ? "Male" : "Unknown";

      const profileURL =
        "https://www.facebook.com/" + uid;

      const text =
        "╭━━━〔 👤 USER INFORMATION 〕━━━╮\n" +
        `┃ 👑 Name: ${name}\n` +
        `┃ 🆔 User ID: ${uid}\n` +
        `┃ ⚧ Gender: ${gender}\n` +
        `┃ 🔗 Profile: ${profileURL}\n` +
        "┣━━━━━━━━━━━━━━━━━━┫\n" +
        "┃ 📝 Post details: Not available\n" +
        "┃ ❤️ Likes/comments: Not available\n" +
        "┃ 📧 Private data: Not accessible\n" +
        "┣━━━━━━━━━━━━━━━━━━┫\n" +
        "┃ 👑 ADMIN: SK MUKUL BOSS\n" +
        "╰━━━━━━━━━━━━━━━━━━╯";

      return message.reply(text);
    } catch (error) {
      console.error("UserInfo Error:", error);
      return message.reply(
        "❌ তথ্য আনতে সমস্যা হয়েছে। বটের API সংযোগ পরীক্ষা করো।"
      );
    }
  }
};
