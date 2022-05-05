import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const currentTime = 'videoplayer-current-time';
const getTime = function () {
  player.getCurrentTime().then(seconds => {
    localStorage.setItem(currentTime, seconds);
  });
};

if (localStorage.getItem(currentTime)) {
  player.setCurrentTime(localStorage.getItem(currentTime));
}

player.on('timeupdate', throttle(getTime, 1000));
