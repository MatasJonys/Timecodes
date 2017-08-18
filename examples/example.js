import Timecode from '../src/timecode';

console.log(Timecode.convertTimecodeToFrames('00:00:00:05'));
console.log(Timecode.convertTimecodeToFrames('00:00:13:14'));
console.log(Timecode.convertTimecodeToFrames('00:00:51:21'));
console.log(Timecode.convertTimecodeToFrames('00:08:14:01'));
console.log(Timecode.convertTimecodeToFrames('00:37:48:21'));
console.log(Timecode.convertTimecodeToFrames('01:05:57:04'));
console.log(Timecode.convertTimecodeToFrames('15:31:53:23'));
console.log(Timecode.convertTimecodeToFrames('22:42:55:18'));

console.log(Timecode.convertFramesToTimecode(8));
console.log(Timecode.convertFramesToTimecode(92));
console.log(Timecode.convertFramesToTimecode(252));
console.log(Timecode.convertFramesToTimecode(3481));
console.log(Timecode.convertFramesToTimecode(59129));
console.log(Timecode.convertFramesToTimecode(173161));
console.log(Timecode.convertFramesToTimecode(1904771));
