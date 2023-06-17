import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('iframe'));

const playerTime = 'videoplayer-current-time';

function saveLocal(e) {
  const presentЕime = e.seconds;

  localStorage.setItem('playerTime', JSON.stringify(presentЕime));
}

player.on('play', resumeWhatching);

function resumeWhatching() {
  player.on('timeupdate', throttle(saveLocal, 1000));
  const getTime = JSON.parse(localStorage.getItem(playerTime));
  return player
    .setCurrentTime(getTime)
    .then(function () {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
