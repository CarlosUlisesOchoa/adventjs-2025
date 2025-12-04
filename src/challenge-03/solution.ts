// solution provided by carlos8a.com

/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */

function drawGift(size: number, symbol: string): string {
  // Code here
  if (size < 2) return ''

  const topBottom = symbol.repeat(size)
  const middle = symbol + ' '.repeat(size - 2) + symbol

  const rows = [topBottom]

  for (let i = 0; i < size - 2; i++) {
    rows.push(middle)
  }

  rows.push(topBottom)

  return rows.join('\n')
}
