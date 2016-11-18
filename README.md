## General utility functions and classes


This is more of a exercise in TDD and new ES6 feature more than anything else.
Great for learning but probably need adjustments for using in production. 
Also some of them are not so usefull and should be interpreted as exercise.

---
### A stack implementation using ES6 Classes with unit tests.

> Very simple implementation of a stack in JavaScript with some additional helper methods.
> Useful when trying to not repeat yourself with the same array functions over and over when 
> you actually want a stak


Methods: 

* push - pushes a new element to the top of the stack.
* pop - removes the last element from the stack (LIFO).
* clear - clears the stack.
* size - returns the ammount of elements in the stack.
* peek - returns the last element, but does not remove it.
* isEmpty - returns `true` if the stack is empty or `false` if it's not.

---
### A Queue implementation using ES6 Classes with unit tests.

> Very similar to the Stack implementation.

Methods:

* enqueue - adds a new element to the back of the queue.
* dequeue - removes the first item from the queue (FIFO).
* front - this returns the first element from the queue, this does not remove the element.
* isEmpty - returns `true` if the queue does not conain elements and `false` if it contains at least one element.
* size - returns how many elements the queue contains.

---
### The Priority Queue

> This is a modified version of the basic queue that prioritizes some elements ahead of others.
> The  Priority Queue inherits methods from the normal Queue (so tehy will now wotk one without another).
> It accepts items of the class QueueElement(element :any, priority :digit). The lower the number, the higher the 
> priority, the faster the item will leave the queue.

Methods:

* enqueue - it is an overridden version of the enqueue function from the normal Queue.
It takes into account the priority and arranges the items correspondingly into the Queue.
This implementation repsects items that are of the same priority but added before.
* The rest of the methods are exactly the same as for the normal Queue

---
### Sets

> A set is a collection of unordered elements that are unique. 
> In ES6 there is a native Set class so there is no need for a helper function.
> But the ES6 implementation lacks implementation of basic set operations such as `union`, `intersection`,
`difference`, `isSuperset`.
> An example implementation of these operations can be found at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

---
### Dictionaries

> A dictionary is a collection of distinct elements that are stored as `[key, value]` pairs.
> The Dictionaries are implemented in ES6 in the form of the `Map` class.
> More information can be found at [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map)

---
### Hash Map

> Hashing is finding a value in a data structure in the shortest possible time.
> You can store key-value pairs in this hash map for very fast retrieval accomplished by
> reducing the cost of the 'lookup'.
> This implementation is unsing the 'djb2' hash function.
> The 'djb2' is not the most efficient hash function, but it is easy to
> implement and is fairly robust.
> This implementation handles collisions using the linear probing method.

Methods:
* put - adds a new value (or updates a value) to the hash map.
* remove - removes the calue from the hash map.
* get - returns a value searched by the key.

---
### Tree

> Next up ...