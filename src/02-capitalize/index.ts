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

function capitalize(str: string):string {
    const newString:string[] = str.split(' ')
    return newString.map(word => {
      const firstPart = word[0].toUpperCase()
      const secondPart = word.substring(1)
      return (firstPart + secondPart)
    }).join(' ');
    // return str.split(' ').map(word => word[0].toUpperCase() +word.substring(1) ).join(' ');

}

export { capitalize };
