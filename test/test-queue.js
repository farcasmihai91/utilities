'use strict';

const should = require('chai').should;
const expect = require('chai').expect;
const assert = require('chai').assert;
const Queue = require('../queue');


describe('Queue', function () {
  it('should initialize empty if no items provided', function () {
    let myQueue = new Queue();

    assert.equal(myQueue.items.length, 0);
  });
  it('should add items at the back of the queue', function () {
    let myQueue = new Queue([0, 1, 2, 3]);
    let newItem = 4;
    myQueue.enqueue(newItem);

    expect(myQueue.items.indexOf(newItem)).to.equal(myQueue.items.length -1);
  });
  it('should remove items from the front of the queue', function () {
    let myQueue = new Queue([0, 1, 2, 3]);
    myQueue.dequeue();

    expect(myQueue.items.indexOf(0)).to.equal(-1);
  });
  it('should return the item from the front of the queue using the front() method', function () {
    let myQueue = new Queue([0, 1, 2, 3]);

    expect(myQueue.front()).to.equal(0);
  });
  it('should return true if the queue is empty and fase if its not using the isEmpty() method', function () {
    let myQueue = new Queue();
    
    expect(myQueue.isEmpty()).to.equal(true);
    myQueue.enqueue(1);
    expect(myQueue.isEmpty()).to.equal(false);
  });
});