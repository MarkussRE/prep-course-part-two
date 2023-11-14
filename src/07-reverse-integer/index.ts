/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
    const toString:string = int.toString();
  const splitWord:string[] = toString.split('');
  const reverseArray:string[] = splitWord.reverse();
  const joinString:string | number = parseFloat(reverseArray.join(''));
  return int < 0 ? - +joinString : joinString
}


export { reverse };
