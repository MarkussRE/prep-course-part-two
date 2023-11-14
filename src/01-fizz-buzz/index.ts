/**
 * Fizz Buzz
 *
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five prints “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 *
 * Example:
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

function fizzBuzz(num: number) {
    for(let i = 1; i <= num;i++){
        let str:string = ''
        if(i % 3 === 0) {
          str += 'fizz'
        }
        if(i % 5 === 0) {
          str += 'buzz'
        }
       
        console.log(str || i)
      }
}
    
export { fizzBuzz };
