import Node from './node.js';

export default class LinkedList {
  constructor(headNode) {
    this.headNode = headNode;
  }

  iterator(lLForEach = () => {}) {
    let current = this.headNode;
    while (current.next !== null) {
      lLForEach(current);
      current = current.next;
    }
    return current;
  }

  append(value) {
    const lastNode = this.iterator();
    lastNode.next = new Node(value);
  }

  prepend(value) {
    const rest = this.headNode.next;
    this.headNode.next = new Node(value, rest);
  }

  get size() {
    let linkedListSize = 0;
    let current = this.headNode;
    this.iterator(() => {
      linkedListSize++;
    });
    return linkedListSize;
  }

  get head() {
    return this.headNode;
  }

  get tail() {
    return this.iterator();
  }

  at(index) {
    let foundNode = null;
    this.iterator((current) => {
      if (index === 0) {
        foundNode = current;
      }
      index--;
    });
    if (index === 0 && foundNode === null) foundNode = this.tail;
    return foundNode;
  }
}
