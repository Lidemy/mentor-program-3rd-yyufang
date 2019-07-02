const request = new XMLHttpRequest();
const wrapper = document.querySelector('.wrapper');
const url = 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends';
const clientid = '8tvf1rl8rlhpsc758f5n49biipzjlp';
const gameNum = 20;

request.addEventListener('load', () => {
  if (request.status >= 200 && request.status < 400) {
    const getJson = JSON.parse(request.responseText);
    for (let i = 0; i < gameNum; i += 1) {
      const div = document.createElement('div');
      div.classList.add('stream_wrapper');
      div.innerHTML = `
        <div class="stream_video">
            <img id="stream_video_preview" src=${getJson.streams[i].preview.large}>
        </div>
        <div class="stream_info">
            <div class="info_avatar">
            <img id="info_avatar_logo" src=${getJson.streams[i].channel.logo}>
            </div>
        <div class="info_text">
            <div class="text_content">${getJson.streams[i].channel.status}</div>
            <div class="text_name">${getJson.streams[i].channel.name}</div>
        </div>`;
      wrapper.appendChild(div);
    }
  } else {
    alert('系統不穩定，請再試一次');// console.log(request.status, request.responseText);
  }
});
request.onerror = () => {
  alert('系統不穩定，請再試一次');
};
request.open('GET', url, true);
request.setRequestHeader('Client-ID', clientid);
request.send();
