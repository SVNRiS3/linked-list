import Node from './node.js';
import LinkedList from './linked-list.js';

const head = new Node();
const newLinkedList = new LinkedList(head);
newLinkedList.append(5);
newLinkedList.prepend(9);
console.log(newLinkedList.head);
console.log(`List size: ${newLinkedList.size()}`);
