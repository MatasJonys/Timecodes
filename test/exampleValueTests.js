/* global test */
/* global suite */

import * as assert from 'assert';
import Timecode from '../src/timecode';

const roundTime = (time) => (Math.round(parseFloat(time) * 10000) / 10000);

//-------------------------------------------------
suite('Timecode: convert ', () => {
  test('from timecode to frames', () => {
    assert.equal(Timecode.convertTimecodeToFrames('00:00:00:01'), 1);
    assert.equal(Timecode.convertTimecodeToFrames('00:00:01:00'), 25);
    assert.equal(Timecode.convertTimecodeToFrames('00:00:10:00'), 250);
    assert.equal(Timecode.convertTimecodeToFrames('00:01:00:00'), 1500);
    assert.equal(Timecode.convertTimecodeToFrames('00:10:00:00'), 15000);
    assert.equal(Timecode.convertTimecodeToFrames('01:00:00:00'), 90000);
  });

  test('from frames to timecode', () => {
    assert.equal(Timecode.convertFramesToTimecode(1), '00:00:00:01');
  });
});
