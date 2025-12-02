// solution provided by carlos8a.com

interface Order {
  toy: string
  quantity: number
}

function manufactureGifts(giftsToProduce: Array<Order>): string[] {
  // Code here
  const result: string[] = []
  giftsToProduce.forEach((gift) => {
    if (gift.quantity <= 0) return
    for (let i = 0; i < gift.quantity; i++) {
      result.push(gift.toy)
    }
  })
  return result
}
