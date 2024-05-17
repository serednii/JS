class LInkedListNode {

    constructor(name, next = null) {
        this.name = name;
        this.next = next;
    }

    toString() {
        return `${this.name}`;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }


    length() {

        let length = 0;

        if (!this.head) {
            return null
        }

        let currentNode = this.head;
        while (currentNode) {
            length++;
            console.log(length)
            currentNode = currentNode.next;
        }

        return length;

    }

    append(name) {
        const newNode = new LInkedListNode(name)
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return this;

    }

    prepend(name) {
        const newNode = new LInkedListNode(name, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    }

    toArray() {
        const nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.next;
        }
        return nodes;
    }

    find(name) {
        if (!this.head) {
            return null
        }
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.name === name)
                return currentNode
            currentNode = currentNode.next;
        }
        return null;
    }


    deleted(name) {

        if (!this.head) {
            return null
        }

        let deletedNode = [];

        while (this.head && this.head.name === name) {
            deletedNode.push(this.head);
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode) {
            while (currentNode.next) {
                if (currentNode.next.name === name) {
                    deletedNode.push(currentNode.next);
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.tail?.name === name) {
            this.tail = currentNode;
        }

        return deletedNode;

    }



    insertAfter(name, prevNode) {

        if (!this.head) {
            return null
        }

        const newNode = new LInkedListNode(name);
        if (!prevNode) {
            this.append(name)
            return this;
        }
        newNode.next = prevNode.next;
        prevNode.next = newNode;



        if (!newNode.next) {
            this.tail = newNode
        }

        return this;

    }

    isCenter() {

        if (!this.head) {
            return null
        }

        let slow = this.head;
        let fast = this.head;
        // let currentNode = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next?.next;
        }

        return slow;

    }

    isCycle() {

        if (!this.head) {
            return null
        }

        let slow = this.head;
        let fast = this.head;
        // let currentNode = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true
            }
        }

        return false;

    }

    toString() {
        return this.toArray().map(node => node.toString())
    }

}

const list = new LinkedList();
list
    .append('a').append('b').append('c').append('d').append('e').append('f').append('g')
// .append('a').append('b').append('c').append('d')
// .append('a').append('b').append('c').append('d')


// list.insertAfter('x', list.find('l'))
// console.log(list.head.next.next.name);
// console.log(list.deleted('a'))
// console.log(list.deleted('b'))

// console.log(list.deleted('c'))
// console.log(list.deleted('e'))
// console.log(list.deleted('d'))
// console.log(list.deleted('f'))


console.log(list.isCenter());
console.log(list.length());

const f = list.find('f');
const b = list.find('b');
f.next = b
console.log(list.isCycle())
// console.log(list.find('a'))






