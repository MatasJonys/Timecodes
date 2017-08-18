const framesPerSecond = 25;

const timecodeToFloat = (timecode) => {
  const timeArray = timecode.split(':');
  const minuteInSeconds = 60;
  const hourInSeconds = minuteInSeconds * 60;

  const hours = timeArray[0] * hourInSeconds;
  const minutes = parseInt(timeArray[1] * minuteInSeconds, 10);
  const seconds = parseInt(timeArray[2], 10);
  const millis = parseInt(timeArray[3], 10);

  return parseFloat(hours + minutes + seconds + millis / framesPerSecond);
};

export default (timecode) => {
  return timecodeToFloat(timecode) * framesPerSecond;
};
