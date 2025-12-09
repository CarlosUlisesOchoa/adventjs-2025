// solution by repository contributor

function findUniqueToy(toy: string): string {
  const lower = toy.toLowerCase()
  const counts: Record<string, number> = {}
  for (const ch of lower) counts[ch] = (counts[ch] || 0) + 1
  for (let i = 0; i < toy.length; i++) {
    if (counts[lower[i]] === 1) return toy[i]
  }
  return ''
}
