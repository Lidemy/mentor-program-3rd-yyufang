const request = require('request');

request.get({
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'Client-ID': '8tvf1rl8rlhpsc758f5n49biipzjlp',
  },
}, (error, response, body) => {
  const json = JSON.parse(body);
  for (let i = 0; i < json.data.length; i += 1) {
    console.log(json.data[i].id, json.data[i].name);
  }
});
