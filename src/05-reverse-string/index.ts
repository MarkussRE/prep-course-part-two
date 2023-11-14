/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string):string {
    const splitWord:string[] = str.split('')
    const reverseArray:string[] = splitWord.reverse()
    const joinString:string = reverseArray.join('')
    return joinString
}
    

export { reverse };
