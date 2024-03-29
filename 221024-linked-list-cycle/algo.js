//////////////////////////////////////////////
// 221024 Linkecd List Cycle algo.js
//////////////////////////////////////////////

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next= null;
    }
}

class LinkedList {
    constructor(node) {
        this.head = node;
    };

    setHead(node) {
        this.head = node;
    }

    print() {
        let ptr = this.head;
        let output = "";
        while (ptr) {
            output = output + "[" + ptr.value + "]";
            if (ptr.next != null) {
                output = output + " -> ";
            }
            ptr = ptr.next;
        }
        return output;
    }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 let hasCycle = (head) => {
    let printCycle = () => {
        let ptr = head
        let output = "";
        while (ptr) {
            output = output + "[" + ptr.value + "]";
            if (ptr.next != null) {
                output = output + " -> ";
            }
            ptr = ptr.next;
        }
        return output;
    }
    // console.log("Print head:", printCycle());

    // Pseudo Code
    // Create two pointers
    //      A. A fast pointer that moves two nodes at a time
    //      b. A slow pointer that moves one node at a time
    // Keep moving the pointers until the fast pointer finds itself is null or the next node is null
    //      If the fast and slow pointers ever point to the same node, then return true becuase there is a loop
    //      if get to a null and no loop was detected return false
    
    let fastPtr = head;
    let slowPtr = head;
    while (fastPtr && fastPtr.next) {
        slowPtr = slowPtr.next;         // Moves pointer one node at a time
        fastPtr = fastPtr.next.next;    // Moves pointer two nodes at a time
        if (slowPtr === fastPtr) {      // If the fast and slow pointers get to the same node, there is a loop
            return true;
        }
    }
    return false;
};

console.log("**************************************");
console.log("Linked List Cycle Algorithm");
console.log("**************************************\n");

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
n1.next = n2;
n2.next = n3;
n3.next = n4;

const lList = new LinkedList(n1);
console.log("n1 has a loop:",hasCycle(n1),"\n");

// Second test case  head = [3,2,0,-4]
let a1 = new Node(3);
let a2 = new Node(2);
let a3 = new Node(0);
let a4 = new Node(-4);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a2;

console.log("*** Second Test Case:  head = [3,2,0,-4] ***");
console.log("second test case has a loop:", hasCycle(a1), "\n");

// Third test case Input: head = [1,2], pos = 0 Output: true
let b1 = new Node(1);
let b2 = new Node(2);
b1.next = b2;
b2.next = b1;

console.log("*** Third Test Case:  head = [1,2], pos = 0 Expect Output: true ***");
console.log("test case has a loop:", hasCycle(b1), "\n");

// Fourth test  case: head = [1]. pos = -1 expected Output: false
let c1 = new Node(1);

console.log("*** Fourth Test Case: head = [1]. pos = -1 expected Output: false ***");
console.log("test case has a loop:", hasCycle(c1), "\n");
