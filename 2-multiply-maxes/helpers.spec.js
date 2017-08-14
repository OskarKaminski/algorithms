import {getHighest, readLine} from './helpers';

describe('', () => {
	xit(`Should return the highest element of array`, ()=> {
			const arr = [2, 3, 8, 10, 15, 3, 1];
			const max = 15;
	    expect(getHighest(arr)).toEqual(max);
	});
});

// describe('readLine', () => {
// 	it(`Should return multiply of two the highest numbers`, ()=> {
// 	    const arr = [2, 3, 8, 10, 15, 3, 1];
// 	    const result = 150;
// 	    expect(readLine(arr)).toEqual(result);
// 	});
// });