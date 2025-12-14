// solution provided by carlos8a.com

function elfBattle(elf1: string, elf2: string): number {
  let hp1 = 3
  let hp2 = 3
  const rounds = Math.max(elf1.length, elf2.length)

  for (let i = 0; i < rounds; i++) {
    const m1 = elf1[i] ?? ''
    const m2 = elf2[i] ?? ''
    let dmgTo2 = 0
    let dmgTo1 = 0

    if (m1 === 'A') {
      if (m2 !== 'B') dmgTo2 += 1
    } else if (m1 === 'F') {
      dmgTo2 += 2
    }

    if (m2 === 'A') {
      if (m1 !== 'B') dmgTo1 += 1
    } else if (m2 === 'F') {
      dmgTo1 += 2
    }

    hp1 -= dmgTo1
    hp2 -= dmgTo2

    if (hp1 <= 0 && hp2 <= 0) return 0
    if (hp1 <= 0) return 2
    if (hp2 <= 0) return 1
  }

  if (hp1 === hp2) return 0
  return hp1 > hp2 ? 1 : 2
}
