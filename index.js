const SlackBot = require("slackbots");
const axios = require("axios");

const TOKEN = process.env.BOT_USER_OAUTH_TOKEN;

const bot = new SlackBot({
  token: TOKEN,
  name: "unicornjokebot"
});
