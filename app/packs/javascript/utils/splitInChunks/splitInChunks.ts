export const splitInChunks = (array: any[], chunksAmount: number): any[] => {
  let chunks = [];

  for (let i = 0; i < chunksAmount; i += 1) {
    chunks.push([])
  }

  for (let i = 0; i < array.length; i += 1) {
    chunks[i % chunksAmount].push(array[i])
  }

  return chunks;
}
