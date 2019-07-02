const request = new XMLHttpRequest();
const btn = document.querySelector('button');
const prize = document.querySelector('.prize');
const img = document.querySelector('.img');
const bg = document.querySelector('body');
btn.addEventListener('click', () => {
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 400) {
      const getJson = JSON.parse(request.responseText);
      if (getJson.prize === 'FIRST') {
        prize.innerText = '恭喜你中頭獎了！日本東京來回雙人遊！';
        bg.className = 'win_first';
        img.src = 'airplane.png';
      } else if (getJson.prize === 'SECOND') {
        prize.innerText = '二獎！90 吋電視一台！';
        bg.className = 'win_other';
        img.src = 'https://www.lg.com/tw/images/tvs/md05269311/gallery/medium1.jpg';
      } else if (getJson.prize === 'THIRD') {
        prize.innerText = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！';
        bg.className = 'win_other';
        img.src = 'data:image/png;base64,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';
      } else if (getJson.prize === 'NONE') {
        prize.innerText = '銘謝惠顧';
        bg.className = 'no_winning';
        img.src = '';
      } else {
        alert('系統不穩定，請再試一次');
        // console.log(request.status, request.responseText)
      }
    }
  });
  request.onerror = () => {
    alert('系統不穩定，請再試一次');
  };
  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
  request.send();
});
