const request = require('request');
const process = require('process');

const actionKey = process.argv[2];
const numKey = process.argv[3];

if (actionKey === 'list') {
  const URL = 'https://lidemy-book-store.herokuapp.com/books?_limit=20';
  request.get(URL, (error, response, body) => {
    const json = JSON.parse(body);
    for (let i = 0; i < json.length; i += 1) {
      console.log(json[i].id, json[i].name);
    }
  });
}

if (actionKey === 'read') {
  const URL = `https://lidemy-book-store.herokuapp.com/books/${numKey}`;
  request.get(URL, (error, response, body) => {
    const json = JSON.parse(body);
    if (json.name === undefined) {
      console.log('Invalid ID');
    } else {
      console.log(json.id, json.name);
    }
  });
}
