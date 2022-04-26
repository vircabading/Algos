///////////////////////////////////////////////////////////
//  220426 Merge Tso Sorted Linked Lists Algorithm algo.js
///////////////////////////////////////////////////////////

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, name) {
    let output = "";
    let runner = node.head;
    while (runner != null) {
        output += runner.data;

        runner = runner.next;

        if (runner != null) {
            output += sep;
        }
    }
    console.log(name + ": " + output);
}

console.log("*********************************");
console.log("Merge two sorted lists Algorithm");
console.log("*********************************\n");

// *** head A ***
let headA = new SinglyLinkedList();
headA.insertNode(1);
headA.insertNode(3);
headA.insertNode(7);
printSinglyLinkedList(headA, " --> ", "headA");

// *** head B ***
let headB = new SinglyLinkedList();
headB.insertNode(1);
headB.insertNode(2);
printSinglyLinkedList(headB, " --> ", "headB");