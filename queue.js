'use strict';

class Queue {
  constructor(items = []) {
    this.items = items;
  }

  enqueue(el){
    this.items.push(el);
  }
  dequeue(){
    this.items.shift();
  }
  front(){
    return this.items[0];
  }
  isEmpty(){
    return this.items.length == 0;
  }
  size(){
    return this.items.length;
  }
}


module.exports = Queue;