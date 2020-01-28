import { Howler, Howl } from "howler";
import italianBirds from "../assets/italian-birds-sprite.m4a";
import blackbird from "../assets/blackbird-sprite.ogg";
import chaffinch from "../assets/chaffinch-sprite.ogg";
import cuckoo from "../assets/cuckoo-sprite.ogg";
import songThrush from "../assets/song-thrush-sprite.ogg";

export const channelList = [];

const birdsHowl = new Howl({
  src: [italianBirds],
  loop: true,
  volume: 0.7
});

export const playSound = () => {
  birdsHowl.play();
};

export const pauseSound = () => {
  birdsHowl.pause();
};

export const volSound = vol => {
  birdsHowl.volume(vol);
};

export const panSound = pan => {
  birdsHowl.stereo(pan);
};
