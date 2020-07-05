import assert from 'assert';
import {g2s, g2sCheckTarget} from '../src/g2s';


const testSamples = [
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1"',
    selector: 'abc',
    expectedResult: false,
    description: 'is Sarari on iOS'
  },
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/83.0.4103.88 Mobile/15E148 Safari/604.1',
    selector: 'abc',
    expectedResult: true,
    description: 'is Chrome on iOS'
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 Edg/83.0.478.58',
    selector: 'abc',
    expectedResult: false,
    description: 'is not iOS'
  },
];

describe('Array', () => {
  testSamples.forEach((sample) => {
    it(sample.description, () => {
      assert.equal(g2sCheckTarget(sample.ua), sample.expectedResult);
    });
  });
});
