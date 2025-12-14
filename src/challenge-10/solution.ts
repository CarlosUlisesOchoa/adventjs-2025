// solution provided by carlos8a.com

function maxDepth(s: string): number {
  let depth = 0
  let maxD = 0

  for (const ch of s) {
    if (ch === '[') {
      depth++
      if (depth > maxD) maxD = depth
    } else if (ch === ']') {
      if (depth === 0) return -1 // closing before opening
      depth--
    }
  }

  return depth === 0 ? maxD : -1
}
