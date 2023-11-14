/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
    let splitWord:string[] = sen.split(' ')
  let cleanWord:string[] = splitWord.map(words => words.replace(/[!&]/g, ''))
  let longestWord:string = cleanWord[0];
  for(let i = 1; i < cleanWord.length;i++){
    if(cleanWord[i].length > longestWord.length){
      longestWord = cleanWord[i]
    }
  }
  return longestWord
}

export { longestWord };
