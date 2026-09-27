const likeButton = document.querySelector('#like-btn');

likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('liked');
  
  if (likeButton.classList.contains('liked')) {
    likeButton.textContent = '❤️ Liked';
  } else {
    likeButton.textContent = '🤍 Like';
  }
});