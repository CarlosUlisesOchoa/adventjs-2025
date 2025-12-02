// solution provided by carlos8a.com

function filterGifts(gifts: string[]): string[] {
  // Code here
  const nonDefectiveGifs = gifts.filter((gift) => !gift.includes('#'))
  return nonDefectiveGifs
}
