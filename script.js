const shareButton = document.querySelector('.share-button');

shareButton.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'WebShare API Demo',
      url: 'https://webshare-api.netlify.app',
      text: '안녕하세요!'
    }).then(() => {
      alert('공유 완료!');
    })
    .catch(console.error);
    } else {
      alert('공유하기가 불가합니다.');
    }
});
