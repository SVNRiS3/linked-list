import LinkedList from './linked-list.js';

const newLinkedList = new LinkedList();
newLinkedList.append(5);
newLinkedList.prepend(9);
newLinkedList.append(12);
console.log(`List size: ${newLinkedList.size}`);
console.log(newLinkedList.head);
console.log(newLinkedList.tail);
console.log(newLinkedList.at(2));
newLinkedList.pop();
console.log(newLinkedList.head);
console.log(newLinkedList.contains(2));
console.log(newLinkedList.find(5));
console.log(newLinkedList.toString());
