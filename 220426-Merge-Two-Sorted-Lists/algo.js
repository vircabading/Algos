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

/**
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    // Pseudo Code
    // 1. Create an Output linkList
    // 2. Create 2 runners pointing to the heads of head1 and head2
    // 3. Iterate through head1 and head2 until get to the end of one list
    // 3.1 if data at runner 1 is < or = to data at runner 2
    // 3.1.A    add data at runner 1 to Output Linked List
    // 3.1.B    point runner 1 to the next node in the list
    // 3.2 else (means data at runner 2 is < data at runner 1) 
    // 3.2.A    therefore, add data at runner to to Output Linked List
    // 3.2.B    point runner 2 to the next node in the list
    // 4. Figure out which list is still not empty
    // 5. Move the remaining data from the remaining non-empty list to the Output
    // 6. Return the Output SinglyLinkedList

    // 1. Create an Output linkList
    // 2. Create 2 runners pointing to the heads of head1 and head2
    let output = new SinglyLinkedList();
    let runner1 = head1.head;
    let runner2 = head2.head;

    // 3. Iterate through head1 and head2 until get to the end of one list
    while (runner1 && runner2) {
        // 3.1 if data at runner 1 is < or = to data at runner 2
        // 3.1.A    add data at runner 1 to Output Linked List
        // 3.1.B    point runner 1 to the next node in the list
        if (runner1.data <= runner2.data) {
            output.insertNode(runner1.data);
            runner1 = runner1.next;
        }
        // 3.2 else (means data at runner 2 is < data at runner 1) 
        // 3.2.A    therefore, add data at runner to to Output Linked List
        // 3.2.B    point runner 2 to the next node in the list
        else {
            output.insertNode(runner2.data);
            runner2 = runner2.next;
        }
    }

    // 4. Figure out which list is still not empty
    // 5. Move the remaining data from the remaining non-empty list to the Output
    while (runner1) {
        output.insertNode(runner1.data);
        runner1 = runner1.next;
    }
    while (runner2) {
        output.insertNode(runner2.data);
        runner2 = runner2.next;
    }

    // 6. Return the Output SinglyLinkedList
    return output;
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
headB.insertNode(3);
headB.insertNode(4);
printSinglyLinkedList(headB, " --> ", "headB");

let headAB = mergeLists(headA, headB);
printSinglyLinkedList(headAB, " --> ", "headAB merged list");