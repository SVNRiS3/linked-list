import Node from './node.js';

export default class LinkedList {
  constructor(headNode) {
    this.headNode = headNode;
  }

  iterator(lLForEach = () => {}) {
    let current = this.headNode;
    while (current.next !== null) {
      current = current.next;
      if (lLForEach(current) === false) {
        break;
      }
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
    if (index === 0) return this.head;
    let foundNode = null;
    this.iterator((current) => {
      if (index === 1) {
        foundNode = current;
        return false;
      }
      index--;
    });
    return foundNode;
  }

  pop() {
    let prev = null;
    this.iterator((current) => {
      if (prev === null) {
        prev = this.head;
      } else {
        prev = prev.next;
      }
    });
    prev.next = null;
  }

  iterator(lLForEach = () => {}) {
    let current = this.headNode;
    while (current.next !== null) {
      current = current.next;
      if (lLForEach(current) === false) {
        break;
      }
    }
    return current;
  }

  contains(value) {
    let isFound = false;
    this.iterator((current) => {
      if (current.value === value) {
        isFound = true;
        return false;
      }
    });
    return isFound;
  }

  find(value) {}
}
