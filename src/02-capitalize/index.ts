/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str: string) {
    let newString:string[] = str.split(' ')
    return newString.map(word => {
      let firstPart = word[0].toUpperCase()
      let secondPart = word.slice(1)
      return (firstPart + secondPart)
    }).join(' ')

}

export { capitalize };
