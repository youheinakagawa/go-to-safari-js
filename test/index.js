import assert from 'assert';
import {g2s, g2sCheckTarget} from '../src/index';


const testSamples = [
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1"',
    selector: 'abc',
    expectedResult: false,
    description: 'is Sarari'
  },
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/83.0.4103.88 Mobile/15E148 Safari/604.1',
    selector: 'abc',
    expectedResult: true,
    description: 'is Chrome'
  },
];

describe('Array', () => {
  testSamples.forEach((sample) => {
    it(sample.description, () => {
      assert.equal(g2sCheckTarget(sample.ua), sample.expectedResult);
    });
  });
});
