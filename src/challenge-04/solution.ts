// solution by repository contributor

function decodeSantaPin(code: string): string | null {
  const blocks = Array.from(code.matchAll(/\[([^\]]+)\]/g), (m) => m[1])
  const digits: number[] = []

  for (let i = 0; i < blocks.length; i++) {
    const token = blocks[i]
    if (token === '<') {
      if (digits.length === 0) return null
      digits.push(digits[digits.length - 1])
      continue
    }

    // token starts with a digit
    const nChar = token[0]
    if (!/\d/.test(nChar)) return null
    let val = Number(nChar)

    // apply operations in order
    for (let j = 1; j < token.length; j++) {
      const op = token[j]
      if (op === '+') val = (val + 1) % 10
      else if (op === '-') val = (val + 9) % 10 // subtract 1 mod 10
      else {
        // ignore unknown chars
      }
    }

    digits.push(val)
  }

  if (digits.length < 4) return null
  return digits
    .slice(0, 4)
    .map((d) => String(d))
    .join('')
}
