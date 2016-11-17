'use strict';

const should = require('chai').should;
const expect = require('chai').expect;
const assert = require('chai').assert;
const Stack = require('../stack');


describe('Stack', function () {
  it('should initialize empty if no items provided', function () {
    let myStack = new Stack();

    assert.equal(myStack.isEmpty(), true);
  });

  it('should push items to the top of the stack', function () {
    let myStack = new Stack([1, 2, 3]);
    let newItem = 4;

    myStack.push(newItem);

    expect(myStack.peek()).to.equal(newItem);
  });

  it('should remove the item from the top of the stack', function () {
    let myStack = new Stack([1, 2, 3]);
    let newItem = 4;
    myStack.push(newItem);
    myStack.pop();

    expect(myStack.peek()).to.equal(3);
    expect(myStack.size()).to.equal(3);
    expect(myStack.items.indexOf(newItem)).to.equal(-1);
  });

  it('should clear when using the clear() method', function () {
    let myStack = new Stack([1, 2, 3]);
    myStack.clear();

    expect(myStack.size()).to.equal(0);
    expect(myStack.isEmpty()).to.equal(true);
  });
});