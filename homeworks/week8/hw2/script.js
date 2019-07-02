// 建立讀取留言函式
function loadMessage() {
  const request = new XMLHttpRequest();
  const container = document.querySelector('.view_posts');
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 400) {
      const getJson = JSON.parse(request.responseText);
      for (let i = 0; i < getJson.length; i += 1) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
          <div class="id">
            留言編號 ${getJson[i].id}
          </div>
          <div class="content">
            ${getJson[i].content}
          </div>`;
        container.appendChild(div);
      }
    } else {
      alert('系統不穩定，請再試一次');
      // console.log(request.status, request.responseText)
    }
  });
  request.onerror = () => {
    alert('系統不穩定，請再試一次');
  };
  request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_limit=20&_sort=id&_order=desc', true);
  request.send();
}

// 載入留言
loadMessage();

// 建立傳送留言函式
function sendForm() {
  const formData = `content=${document.getElementById('new_post_content').value}`;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://lidemy-book-store.herokuapp.com/posts', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(formData);
}

// 點擊按鈕時post
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  if (document.getElementById('new_post_content').value === '') {
    alert('請輸入留言內容');
  } else {
    sendForm();
    document.location.href = './index.html';
    loadMessage();
  }
});
