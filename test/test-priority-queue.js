'use strict';

const should = require('chai').should;
const expect = require('chai').expect;
const assert = require('chai').assert;
const PriorityQueue = require('../priority-queue');


describe('PriorityQueue', function () {
  it('should initialize empty if no items provided', function () {
    let myQueue = new PriorityQueue();
    assert.equal(myQueue.items.length, 0);
  });

  it('should enqueue an item on an empty queue', function () {
    let myQueue = new PriorityQueue();
    myQueue.enqueue(0, 5);
    assert.equal(myQueue.items.length, 1);
  });
  it('should return the correct size of the queue using the size() method', function () {
    let myQueue = new PriorityQueue();
    myQueue.enqueue(0, 5);
    myQueue.enqueue(1, 4);
    myQueue.enqueue(2, 3);
    myQueue.enqueue(3, 2);
    myQueue.enqueue(4, 1);
    assert.equal(myQueue.size(), 5);
  });
  it('should enqueue an item in the correct order based on priority', function () {
    let myQueue = new PriorityQueue();
    myQueue.enqueue(0, 5);
    myQueue.enqueue(1, 4);
    myQueue.enqueue(2, 3);
    myQueue.enqueue(3, 2);
    myQueue.enqueue(4, 1);
    assert.equal(myQueue.size(), 5);
    expect(myQueue.items[0].element).to.equal(4);
    expect(myQueue.items[0].priority).to.equal(1);
    expect(myQueue.front().element).to.equal(4);
    expect(myQueue.front().priority).to.equal(1);
    expect(myQueue.items[myQueue.items.length - 1].element).to.equal(0);
    expect(myQueue.items[myQueue.items.length - 1].priority).to.equal(5);
  });
  it('should remove items from the front of the queue', function () {
    let myQueue = new PriorityQueue();
    myQueue.enqueue(0, 5);
    myQueue.enqueue(1, 4);
    myQueue.enqueue(2, 3);
    myQueue.enqueue(3, 2);
    myQueue.enqueue(4, 1);

    myQueue.dequeue();

    assert.equal(myQueue.size(), 4);
    expect(myQueue.front().element).to.equal(3);
    expect(myQueue.items.filter(function(el) { return el.element == 4; })).to.deep.equal([]);
  });
  it('should return the item from the front of the queue using the front() method', function () {
    let myQueue = new PriorityQueue();
    myQueue.enqueue(0, 5);
    myQueue.enqueue(1, 4);
    myQueue.enqueue(2, 3);
    myQueue.enqueue(3, 2);
    myQueue.enqueue(4, 1);

    expect(myQueue.front().element).to.equal(4);
  });
  it('should return true if the queue is empty and fase if its not using the isEmpty() method', function () {
    let myQueue = new PriorityQueue();
    
    expect(myQueue.isEmpty()).to.equal(true);
    myQueue.enqueue(1,1);
    expect(myQueue.isEmpty()).to.equal(false);
  });
});