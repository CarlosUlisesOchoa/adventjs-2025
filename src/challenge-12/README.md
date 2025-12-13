# CHALLENGE #12: ELF BATTLE

> **Level**: MEDIUM

Two elves fight with move decks represented as strings. Moves:

- `A` Normal attack (1 damage) — blocked by `B`.
- `B` Block — blocks `A`.
- `F` Strong attack (2 damage) — cannot be blocked.

Both start with 3 HP. Resolve each round simultaneously. The battle ends immediately when one elf reaches 0 or less.

Return `1` if Elf 1 wins, `2` if Elf 2 wins, or `0` for a draw.

Examples are in the transcription.
