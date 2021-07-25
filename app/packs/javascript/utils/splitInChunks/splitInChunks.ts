export const splitInChunks = (array: any[], chunksAmount: number): any[] => {
  const chunksSize = Math.ceil(array.length / chunksAmount);
  let chunks = [];

  for (let i = 0; i < array.length; i += chunksSize) {
    chunks.push(array.slice(i, i + chunksSize))
  }

  return chunks;
}
