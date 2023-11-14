/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {
  n:number[] = []
  add(n: number) {
    console.log(this.n)
    return this.n.push(n) 
  }

  remove():number | undefined{
    return this.n.shift()
  }
}

export { Queue };
