import Node from './node.js';

export default class LinkedList {
  constructor(head) {
    this.head = head;
  }

  append(value) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(value);
  }

  prepend(value) {
    const rest = this.head.next;
    this.head.next = new Node(value, rest);
  }
}
