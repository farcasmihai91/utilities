'use strict';
const Queue = require('./queue');

class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue extends Queue {
  constructor(items = []) {
    super(items);
  }
  enqueue(element, priority) {
    var queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      super.enqueue(queueElement);
    } else {
      let added = false
      this.items.some((item, i) => {
        if (queueElement.priority < item.priority) {
          this.items.splice(i, 0, queueElement);
          return added = true;
        }
        if (!added) { super.enqueue(queueElement); }
      });
    }
  }
}


module.exports = PriorityQueue;