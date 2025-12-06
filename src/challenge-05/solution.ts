// solution by repository contributor

type ElfDateTime = `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(fromTime: ElfDateTime, takeOffTime: ElfDateTime): number {
  // All your code here
  function parseElfTime(t: string): number {
    // Example: 2025*12*25@00|00|00 NP
    const clean = t.replace(/\s*NP\s*$/, '')
    const [datePart, timePart] = clean.split('@')
    const [year, month, day] = datePart.split('*').map(Number)
    const [hour, minute, second] = timePart.split('|').map(Number)
    return Date.UTC(year, month - 1, day, hour, minute, second)
  }
  const fromMs = parseElfTime(fromTime)
  const toMs = parseElfTime(takeOffTime)
  const diffSeconds = Math.floor((toMs - fromMs) / 1000)
  return diffSeconds
}
