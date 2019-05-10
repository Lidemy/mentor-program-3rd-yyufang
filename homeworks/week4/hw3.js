const request = require('request');
const process = require('process');

const actionKey = process.argv[2];
const numKey = process.argv[3];
const updateName = process.argv[4];

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
    console.log(json.id, json.name);
  });
}

if (actionKey === 'delete') {
  const URL = `https://lidemy-book-store.herokuapp.com/books/${numKey}`;
  request.delete(URL, (error, response) => {
    if (response.statusCode === 200) {
      console.log('已成功刪除');
    } else if (response.statusCode === 404) {
      console.log('查無該筆書目');
    } else {
      console.log(response.statusCode);
    }
  });
}

if (actionKey === 'create') {
  const URL = 'https://lidemy-book-store.herokuapp.com/books';
  request.post({ url: URL, name: numKey }, (error, response) => {
    if (response.statusCode === 201) {
      console.log('已成功新增');
    }
  });
}

if (actionKey === 'update') {
  const URL = `https://lidemy-book-store.herokuapp.com/books/${numKey}`;
  request.patch({ url: URL, name: updateName }, (error, response) => {
    if (response.statusCode === 200) {
      console.log('已成功修改');
    } else if (response.statusCode === 404) {
      console.log('查無該筆書目');
    } else {
      console.log(response.statusCode);
    }
  });
}

if (actionKey === undefined) {
  console.log('Invalid input, please try again');
}
