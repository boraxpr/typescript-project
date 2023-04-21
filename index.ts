// A function type interface
interface thisInterface {
    (collection_1: number[], collection_2: number[]): number[];
}

// A function that implements the interface
function thisInterface(collection_1: number[], collection_2: number[]): number[] {
    return collection_1.concat(collection_2);
}

