// solution provided by carlos8a.com

interface Glove {
  hand: 'L' | 'R'
  color: string
}

function matchGloves(gloves: Glove[]): string[] {
  const lefts: Record<string, number> = {}
  const rights: Record<string, number> = {}
  const result: string[] = []

  for (const g of gloves) {
    const color = g.color
    if (g.hand === 'L') {
      // if there's an unmatched right, pair it
      if ((rights[color] || 0) > 0) {
        rights[color]!--
        result.push(color)
      } else {
        lefts[color] = (lefts[color] || 0) + 1
      }
    } else {
      if ((lefts[color] || 0) > 0) {
        lefts[color]!--
        result.push(color)
      } else {
        rights[color] = (rights[color] || 0) + 1
      }
    }
  }

  return result
}
