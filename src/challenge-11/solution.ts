function findUnsafeGifts(warehouse: string[]): number {
  const rows = warehouse.length
  const cols = warehouse[0]?.length ?? 0
  let count = 0

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (warehouse[r][c] !== '*') continue

      const neighbors = [
        [r - 1, c],
        [r + 1, c],
        [r, c - 1],
        [r, c + 1],
      ]

      let protectedFlag = false
      for (const [nr, nc] of neighbors) {
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue
        if (warehouse[nr][nc] === '#') {
          protectedFlag = true
          break
        }
      }

      if (!protectedFlag) count++
    }
  }

  return count
}
