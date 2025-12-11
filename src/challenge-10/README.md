# Challenge #10: 🔒 Locked

> **Difficulty**: ?

## 📜 Description

## 💡 Notes

```markdown
# CHALLENGE #10: DEPTH OF CHRISTMAS MAGIC

> **Level**: EASY

In the ancient Christmas language, the brackets `[` and `]` represent the intensity of a wish. The nesting depth indicates how strong the wish is.

Write a function `maxDepth(s: string)` that returns the maximum depth of properly nested brackets in the given string. If the brackets are not balanced or a closing bracket appears before an opening one, return `-1`.

Examples:
```

````

maxDepth('[]') // -> 1
maxDepth('[[]]') // -> 2
maxDepth('[][]') // -> 1
maxDepth('[[][]]') // -> 2
maxDepth('[[[]]]') // -> 3
maxDepth('[[[[]]]][]]') // -> 2

maxDepth('][') // -> -1 (closes before opening)
maxDepth('[[[') // -> -1 (missing closing brackets)
maxDepth(']]]') // -> -1 (extra closing brackets)
maxDepth('[][][') // -> -1 (one remains unclosed)

```

Implement the function in `solution.ts`.
````
