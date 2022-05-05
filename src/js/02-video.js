import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const CURRENTTIME = 'videoplayer-current-time';
const getTime = function () {
  player.getCurrentTime().then(seconds => {
    localStorage.setItem(CURRENTTIME, seconds);
  });
};

if (localStorage.getItem(CURRENTTIME)) {
  player.setCurrentTime(localStorage.getItem(CURRENTTIME));
}

player.on('timeupdate', throttle(getTime, 1000));
