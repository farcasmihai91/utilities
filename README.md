## General utility functions and classes


This is more of a exercise in TDD and new ES6 feature more than anything else.
Great for learning but probably need adjustments for using in production. 
Also some of them are not so usefull and should be interpreted as exercise.

---
1. A stack implementation using ES6 Classes with unit tests.

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
2. A queue implementation using ES6 Classes with unit tests.

> Very similar to the Stack implementation.

Methods:

* enqueue - adds a new element to the back of the queue.
* dequeue - removes the first item from the queue (FIFO).
* front - this returns the first element from the queue, this does not remove the element.
* isEmpty - returns `true` if the queue does not conain elements and `false` if it contains at least one element.
* size - returns how many elements the queue contains.

---
3. The Priority Queue

> This is a modified version of the basic queue that prioritizes some elements ahead of others.
> The  Priority Queue inherits methods from the normal Queue (so tehy will now wotk one without another).
> It accepts items of the class QueueElement(element :any, priority :digit). The lower the number, the higher the 
> priority, the faster the item will leave the queue.

Methods:

* enqueue - it is an overridden version of the enqueue function from the normal Queue.
It takes into account the priority and arranges the items correspondingly into the Queue.
* The rest of the methods are exactly the same as for the normal Queue