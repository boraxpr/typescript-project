// A function type interface
interface Imerge {
    (collection_1: number[], collection_2: number[]): number[];
}


// A function that implements the interface
export const merge: Imerge = function (collection_1: number[], collection_2: number[]): number[] {
    var collection = collection_1.concat(collection_2);
    return quicksort(collection);
}

function quicksort(collection: number[]): number[] {
    if (collection.length <= 1) {
        return collection;
    }
    var pivot = collection[0];
    var left = [];
    var right = [];
    for (var i = 1; i < collection.length; i++) {
        if (collection[i] < pivot) {
            left.push(collection[i]);
        } else {
            right.push(collection[i]);
        }
    }
    return quicksort(left).concat(pivot, quicksort(right));
}