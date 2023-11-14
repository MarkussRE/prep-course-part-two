/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(str: string) {
    const toArray:string[] = str.split('').map(word => word.toLocaleLowerCase())
    
    const areVowels:string[] = ['a','e', 'i', 'u', 'o']
    let counter:number = 0
    for (let i = 0; i < toArray.length; i++){
        for(let j = 0; j < areVowels.length; j++){
        if(toArray[i] === areVowels[j]){
        counter = counter + 1
        };
        ;}
  };
  return counter;
}

export { vowels };
