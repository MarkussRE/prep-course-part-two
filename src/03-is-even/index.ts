/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(num: number) {
    return (num & 1) === 0 // if num binary last number is 1 it isn't gonna be equal whit 0 it will return false
}

export { isEven };
