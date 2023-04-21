import { merge } from '../src/index';

describe('merge', () => {
    it('should merge and sort two arrays without sort()', () => {
        var collection_1: number[] = [1, 3, 5]
        var collection_2: number[] = [2, 4, 6]
        expect(merge(collection_1, collection_2)).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
