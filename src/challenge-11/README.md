# CHALLENGE #11: UNWATCHED GIFTS

> **Level**: EASY

The warehouse is represented as an array of strings, where `*` is a present, `#` is a camera, and `.` empty space.

A present is protected if any of its 4 adjacent cells (up, down, left, right) has a camera `#`.

Write `findUnsafeGifts(board: string[])` that returns how many presents are not under surveillance.

Examples:

```
findUnsafeGifts([
  '.*.',
  '*#*',
  '.*.'
]) // -> 0

findUnsafeGifts([
  '...',
  '.*.',
  '...'
]) // -> 1

findUnsafeGifts([
  '*.*',
  '...',
  '*#*'
]) // -> 2

findUnsafeGifts([
  '....',
  '.*.*',
  '..#.',
  '.*.*',
  '....'
]) // -> 4
```

Implement the function in `solution.ts`.
