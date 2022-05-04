import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const VCT = 'videoplayer-current-time';
const getTime = function () {
  player.getCurrentTime().then(seconds => {
    localStorage.setItem(VCT, seconds);
  });
};

if (localStorage.getItem(VCT)) {
  player.setCurrentTime(localStorage.getItem(VCT));
}

player.on('timeupdate', throttle(getTime, 1000));
