 import Player from '@vimeo/player';
 import throttle from 'lodash.throttle';

  const iframe = document.querySelector('iframe');
  const player = new Player(iframe);
  const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  if (savedTime !== null) {
    player.setCurrentTime(savedTime);
  }

  const updateLocalStorage = throttle(function(currentTime) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
  }, 1000);

  player.on('timeupdate', function(data) {
    const currentTime = data.seconds;
    updateLocalStorage(currentTime);
  });
  
    


