// solution stub for challenge 09

function moveReno(board: string, moves: string): string {
  // We parse the board by removing whitespace and splitting by lines
  const rows = board.trim().split('\n')

  // Find the starting position of the reindeer (@)
  let y = rows.findIndex((row) => row.includes('@'))
  let x = rows[y].indexOf('@')

  // Iterate through the moves
  for (const move of moves) {
    // Update coordinates based on the move
    if (move === 'L') x--
    if (move === 'R') x++
    if (move === 'U') y--
    if (move === 'D') y++

    // 1. Check if it went off the board (Boundary Check)
    if (y < 0 || y >= rows.length || x < 0 || x >= rows[0].length) {
      return 'crash'
    }

    const currentCell = rows[y][x]

    // 2. Check content of the new cell
    if (currentCell === '#') return 'crash'
    if (currentCell === '*') return 'success'
  }

  // If movements finish without success or crash
  return 'fail'
}
