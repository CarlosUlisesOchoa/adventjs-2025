# CHALLENGE #8: FIND THE UNIQUE TOY

> **Level**: EASY

Santa wants to know what the first non-repeated letter is in a toy's name.
Write a function that takes a string and returns the first letter that is not repeated, ignoring uppercase and lowercase when counting, but returning the letter as it appears in the string.

If there is none, return an empty string ("").

Examples:

```javascript
findUniqueToy('Gift') // 'G'

findUniqueToy('sS') // ''

findUniqueToy('reindeer') // 'i'

// More cases:
findUniqueToy('AaBbCc') // ''
findUniqueToy('abcDEF') // 'a'
findUniqueToy('aAaaAF') // 'F'
findUniqueToy('sTreSS') // 'T'
findUniqueToy('z') // 'z'
```
