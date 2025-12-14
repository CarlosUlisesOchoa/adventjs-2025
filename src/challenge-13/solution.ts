function runFactory(factory: string[]): 'completed' | 'loop' | 'broken' {
  const rows = factory.length
  const cols = factory[0]?.length ?? 0
  let r = 0,
    c = 0
  const seen = new Set<string>()

  while (true) {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return 'broken'
    const key = `${r},${c}`
    if (seen.has(key)) return 'loop'
    seen.add(key)

    const cell = factory[r][c]
    if (cell === '.') return 'completed'

    if (cell === '>') c++
    else if (cell === '<') c--
    else if (cell === '^') r--
    else if (cell === 'v') r++
    else return 'broken'
  }
}
