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
        console.log(output);
    }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 let hasCycle = (head) => {
    
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
n2.next = n4;

const lList = new LinkedList(n1);
lList.print();