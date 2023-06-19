import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const PLAYER_TIME = 'videoplayer-current-time';

const saveCurrentTime = throttle(time => {
  localStorage.setItem('videoplayer-current-time', time);
}, 1000);

const getTime = localStorage.getItem(PLAYER_TIME);

if (getTime) {
  player.setCurrentTime(getTime);
}

player.on('timeupdate', data => {
  saveCurrentTime(data.seconds);
});
