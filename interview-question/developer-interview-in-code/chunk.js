/**
  Problem 1 : Chunk

  implement a function that splits an array into groups of size N
  the last chunk may contain less elements than N

  @example
  chunk([1,2,3,4,5], 2) => [[1,2], [3,4], [5]]
  chunk([1,2,3], 1) => [[1],[2],[3]]
  chunk([], 5) => []
 */

export const chunk = (arr, size = 1) => {
  
  //  
  if (!arr.length || size < 1) {
    return [];
  }

  const chunks = [];

  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2], [3,4], [5]]
console.log(chunk([1, 2, 3], 1)); // [[1], [2], [3]]
console.log(chunk([], 5)); // []
