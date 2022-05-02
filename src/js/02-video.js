import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
var throttle = require('lodash.throttle');

// player.on('play', function () {
//   console.log('played the video!');
// });
player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
    console.log(seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
player.on(
  'timeupdate',
  throttle(() => {
    player
      .getCurrentTime()
      .then(seconds => {
        // seconds = the current playback position
        localStorage.setItem('videoplayer-current-time', seconds);
      })
      .catch(error => {
        // an error occurred
        console.log(error);
      });
  }, 1000),
);
