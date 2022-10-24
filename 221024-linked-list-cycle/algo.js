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
    constructor() {
        this.head = null;
    }

    constructor(node) {
        this.head = node;
    }

    print() {
        let ptr = this.head;
        let output = "";
        while (ptr) {
            output = output + "[", + ptr.value + "]";
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

