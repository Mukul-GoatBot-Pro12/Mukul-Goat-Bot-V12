module.exports = {
  config: {
    name: "restart",
    version: "1.0.0",
    author: "SK MUKUL BOSS",
    countDown: 10,
    role: 2,
    shortDescription: "Restart bot",
    longDescription: "Restart bot process",
    category: "owner",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    await message.reply(
      "♻️ Restarting bot...\n" +
      "👑 ADMIN: SK MUKUL BOSS"
    );

    setTimeout(() => {
      process.exit(0);
    }, 1000);
  }
};
