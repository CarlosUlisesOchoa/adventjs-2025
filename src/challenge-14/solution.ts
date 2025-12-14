// solution provided by carlos8a.com

function findGiftPath(workshop: Record<string, any>, gift: any): string[] {
  const path: string[] = []

  function dfs(current: any, keys: string[]): boolean {
    if (current === gift) {
      path.push(...keys)
      return true
    }
    if (current && typeof current === 'object') {
      for (const k of Object.keys(current)) {
        if (dfs(current[k], [...keys, k])) return true
      }
    }
    return false
  }

  dfs(workshop, [])
  return path
}
