import {
  framesPerSecond,
  minuteInSeconds,
  hourInSeconds,
} from './constants';

const timecodeToFloat = (timecode) => {
  const timeArray = timecode.split(':');

  const hours = timeArray[0] * hourInSeconds;
  const minutes = parseInt(timeArray[1] * minuteInSeconds, 10);
  const seconds = parseInt(timeArray[2], 10);
  const frame = parseInt(timeArray[3], 10);
  const millis = frame / framesPerSecond;

  return parseFloat(hours + minutes + seconds + millis);
};

export default (timecode) => {
  return timecodeToFloat(timecode) * framesPerSecond;
};
