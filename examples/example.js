import Timecode from '../src/timecode';

console.log('Input          Output');
console.log('00:00:00:05   ', Timecode.convertTimecodeToFrames('00:00:00:05'));
console.log('00:00:13:14   ', Timecode.convertTimecodeToFrames('00:00:13:14'));
console.log('00:00:51:21   ', Timecode.convertTimecodeToFrames('00:00:51:21'));
console.log('00:08:14:01   ', Timecode.convertTimecodeToFrames('00:08:14:01'));
console.log('00:37:48:21   ', Timecode.convertTimecodeToFrames('00:37:48:21'));
console.log('01:05:57:04   ', Timecode.convertTimecodeToFrames('01:05:57:04'));
console.log('15:31:53:23   ', Timecode.convertTimecodeToFrames('15:31:53:23'));
console.log('22:42:55:18   ', Timecode.convertTimecodeToFrames('22:42:55:18'));
console.log('8'.padEnd(14), Timecode.convertFramesToTimecode(8));
console.log('92'.padEnd(14), Timecode.convertFramesToTimecode(92));
console.log('252'.padEnd(14), Timecode.convertFramesToTimecode(252));
console.log('3481'.padEnd(14), Timecode.convertFramesToTimecode(3481));
console.log('59129'.padEnd(14), Timecode.convertFramesToTimecode(59129));
console.log('173161'.padEnd(14), Timecode.convertFramesToTimecode(173161));
console.log('1904771'.padEnd(14), Timecode.convertFramesToTimecode(1904771));