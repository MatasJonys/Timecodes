import {
  framesPerSecond,
  minuteInSeconds,
  hourInSeconds,
  millisInAFrame,
} from './constants';

export default (inFrames) => {
  let inSeconds = inFrames / framesPerSecond;
  const millis = (inSeconds - parseInt(inSeconds, 10)) * 1000;

  const hours = Math.floor(inSeconds / hourInSeconds, 10);
  inSeconds -= hours * hourInSeconds;

  const minutes = Math.floor(inSeconds / minuteInSeconds, 10);
  inSeconds -= minutes * minuteInSeconds;

  const seconds = Math.floor(inSeconds, 10);
  const frames = Math.round(millis / millisInAFrame);

  return `${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}:${frames.toString().padStart(2, 0)}`;
};
