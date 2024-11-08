// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

function countWordOccurrences(sentence: string, word: string): number | undefined{
    const regexp = new RegExp(`\\b${word}\\b`, 'gi')
    const result = sentence.match(regexp)
    return result ? result.length : 0
}

// console.log(countWordOccurrences('TypeScript is great is. I loisveis is is TypeScript!', 'is'))