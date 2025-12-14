// solution provided by carlos8a.com

function drawTree(height: number, ornament: string, frequency: number): string {
  let pos = 1
  const rows: string[] = []
  for (let r = 1; r <= height; r++) {
    const width = 2 * r - 1
    let row = ''
    for (let i = 0; i < width; i++) {
      row += pos % frequency === 0 ? ornament : '*'
      pos++
    }
    // center the row with spaces to the left
    const padding = ' '.repeat(height - r)
    rows.push(padding + row)
  }
  // trunk
  const trunk = ' '.repeat(height - 1) + '#'
  rows.push(trunk)
  return rows.join('\n')
}
