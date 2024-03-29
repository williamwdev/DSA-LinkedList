// 1. Create a linked list class

class _Node { // Private class that should not be accessible by anyone else other than the linked list class
    constructor(value, next) {
        this.value = value; // value holds the data
        this.next = next; // pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // 1st node. Starting with empty list so value is null
    }

    // Inserting at beginning = create new node item, point the head to that new node. O(1) operation
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    // Inserting at the end of LL = create a new node item, check to see if the list is empty. If it is, then insert the new item as the only item in the list. Start at the beginning of the list and traverse through the list until you reach the end of the list.
    // Set the end node's next pointer to the new node. The new node's next pointer is null (indicating that the new node now is the last node on the list). O(n) operation
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        // start at the head
        let currNode = this.head;
        // if the list is empty
        if (!this.head) {
            return null;
        }
        // check for the item
        while (currNode.value !== item) {
            // return null if it's the end of the list and the item is not on the list
            if (currNode.next === null) {
                return null;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // found it
        return currNode;
    }

    // best-case = 0(1), average & worst-case are O(n)
    remove(item) {
        // if the list is empty
        if (!this.head) {
            return null;
        }
        // if the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            console.log('this.head.value ===', this.head.value)
            console.log('item ===', item)
            return;
        }
        // Start at the head
        let currNode = this.head;
        // keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // save the prev node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    // Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key. O(n) operation because it has to iterate through the LL to match target value.
    insertBefore(newNode, value) {
        let currNode = this.head;
        let prevNode = this.head;
        if (!this.head) {
            return null; // if LL is empty return null;
        }
        while (currNode.value !== value) { // iterate through LL to check if current node matches target value
            if (currNode.next === null) { // when it reaches end of the list return message
                return new Error('Not Found');
            } else { // otherwise, move the pointer
                prevNode = currNode;
                currNode = currNode.next;
            }
        }
        prevNode.next = new _Node(newNode, currNode); // inserting new node AFTER prev node
        return console.log(`Successfully added ${newNode}`)
    }

    // implement a function called insertAfter() in the class that inserts a new node after a node containg the key
    insertAfter(newNode, value) {
        let currNode = this.head;
        let prevNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== value) {
            if (currNode.next === null) {
                return new Error('Not Found');
            } else {
                prevNode = currNode;
                currNode = currNode.next;
            }
        }
        currNode.next = new _Node(newNode, currNode); // inserting new node AFTER current node
        console.log('checking insertAfter =', currNode.next) // 'Hotdog', 'Helo'
        return console.log(`Successfully added ${newNode}`)
    }

    // implement a function called insertAt() that inserts an item at a specific position in the LL
    insertAt(newNode, position) {
        let currNode = this.head;
        let prevNode = this.head;
        if (!this.head) {
            return null;
        }
        let counter = 0;
        while (counter < position) {
            // console.log('position =', position)
            // console.log('counter =', counter)
            if (currNode.next === null) {
                return new Error('Linked list is not long enough');
            } else {
                prevNode = currNode;
                currNode = currNode.next;
            }
            counter++;
        }
        prevNode.next = new _Node(newNode, currNode);
        console.log('insertAt =', prevNode.next)
        return console.log(`Successfully added ${newNode} at ${position}`);
    }
}

// Supplemental functions for a linked list

// create a free function that displays the linked list
function display(ll) {
    let node = ll.head;
    while (node !== null) { // iterate through ll as long as node isnt node
        console.log('node === ', node)
        node = node.next;
    }
}

// create a function that returns the size of the linked list
function size(ll) {
    let node = ll.head;
    let count = 0; // variable to count how many nodes are in LL
    while (node !== null) {
        count++; // increment count after each pass
        node = node.next; // move ptr to next node 
    }
    console.log('size ===', count)
    return count;
}

// create function to find if the list is empty or not (without using size() function)
function isEmpty(ll) {
    let node = ll.head;
    if (node === null) {
        console.log(true, 'LL is empty');
        return true;
    } else {
        console.log(false, 'LL is not empty');
        return false;
    }
}

// create function that finds the node before the item you are looking for
function findPrevious(ll, value) {
    let currNode = ll.head;
    let prevNode = ll.head;
    if (!ll.head) { // if list is empty, return null
        console.log('list is empty')
        return null;
    }
    while (currNode.value !== value) {
        if (currNode.next === null || prevNode === null) {
            console.log('previous node doesnt exist')
            return null;
        } else {
            prevNode = currNode;
            currNode = currNode.next;
        }
    }
    console.log('findPrevious ===', prevNode.value)
    return prevNode.value;
}

// implement findLast function that returns the last node in the LL
function findLast(ll) {
    let node = ll.head;
    if (!node) {
        console.log('LL is empty')
        return null;
    }
    while (node.next !== null) {
        node = node.next
    }
    console.log('findLast node === ', node.value)
    return node.value;
}

// Write an algorithm to reverse a LL. The time complexity of your algorithm should be linear (O(n)). All pointers should point backward.

function reverseList(ll) {
    if (ll.head === null) {
        return null;
    }
    let current = ll.head; // set variables with default values
    let previous = null;
    let next = null;
    while (current !== null) { // iterate through list as long as head is not null
        // console.log('next ===', current.next);
        next = current.next; // set next node value pointer to next node
        // console.log('current.next ===', previous)
        current.next = previous; // reversing pointer from next to prev
        // console.log('previous ===', current)
        previous = current;
        // console.log('current ===', next)
        current = next;
    }
    // console.log('ll.head', previous)
    ll.head = previous;
    // console.log('ll ===', ll);
    return ll;
}

// Write an algorithm to find the 3rd element from the end of the LL. (Don't use length property)

function thirdFromTheEnd(ll) {
    // input = 1, 2, 3, 4
    // output = 2
    let currentNode = ll.head;
    console.log('currentNode ===', currentNode)
    while (currentNode.next.next.next !== null) { // as long as there are 3 nodes ahead of currentNode, iterate and set pointer down the list
        // console.log('currentNode ===', currentNode.next)
        currentNode = currentNode.next;
    }
    // break out of loop and return value of current node which should be the third from the end
    console.log('currentNode ===', currentNode)
    return currentNode;
}

// ======= Write an algo to find the middle element of a LL =========
// TODO: Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.

function middleOfList(ll) {
    const middle = Math.ceil(size(ll) / 2);
    console.log('middle =', middle);
    let counter = 0;
    let currNode = ll.head;
    let prevNode = ll.head;
    while (counter < middle) {
        if (currNode.next === null) {
            return new Error('Linked list not long enough');
        } else {
            prevNode = currNode;
            currNode = currNode.next;
        }
        counter++;
    }
    console.log('middleOfList =', prevNode);
    return prevNode;
}

// ============= Cycle in a list ==================
// TODO: Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). For this exercise, create a linked list with the name CycleList. Be sure to insert nodes in the list so that it has a cycle. Then test your program with a cycleList function.

function cycleList(ll) {
    // base case
    if (!ll.head) { // if list is empty return null
        return null;
    }
    let current = ll.head;
    let fastCounter = ll.head;
    do {
        if (fastCounter.next !== null && fastCounter.next.next !== null) {
            fastCounter = fastCounter.next.next;
        } else {
            console.log('cycleList =', false)
            return false;
        }
        current = current.next;
    } while (fastCounter.value !== current.value);
    console.log('cycleList =', true)
    return true;
}

let SLL = new LinkedList();
SLL.insertLast('First Item');
SLL.insertLast('Second Item');
SLL.insertLast('Middle Item'); // added to test middleOfList function
SLL.insertLast('Third Item');
SLL.insertLast('Fourth Item');
display(SLL); // returned each node in correct order - O(n)
size(SLL); // output: 4 - O(n)
isEmpty(SLL); // true and false conditions both work - O(1)
findPrevious(SLL, 'Second Item'); // TODO: edge case for finding prevNode of first item - O(n)
findLast(SLL); // works as intended - O(n)
reverseList(SLL); // works as intended - O(n)
thirdFromTheEnd(SLL); // TODO: works but need to look at edge cases - O(n)
middleOfList(SLL); // returns 'Middle Item' - O(n)
cycleList(SLL); // returns false - O(n)


// Write a function and use the LL class above to create a LL with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
function main() {
    // create new LL named SLL
    let SLL = new LinkedList();
    // insert Apollo, Boomer, Helo, Husker, Starbuck into LL
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    // Add William to the SLL
    SLL.insertLast('William');
    // remove squirrel from list
    SLL.remove('squirrel'); // returned "Item not found" in console. Working as intended.
    // Add Athena before Boomer using my insertBefore() function
    SLL.insertBefore('Athena', 'Boomer'); // function works
    SLL.insertAfter('Hotdog', 'Helo'); // function works
    SLL.insertAt('Kat', 3); // TODO: basic functionaility works, but need to check for edge cases
    SLL.remove('Apollo'); // TODO: revisit. Removing the incorrect nodes
    return SLL;
    // run "node linkedlist.js" in terminal
}

// console.log(main());


module.exports = {
    LinkedList,
    display,
    size,
    isEmpty,
    findPrevious,
    findLast,
}