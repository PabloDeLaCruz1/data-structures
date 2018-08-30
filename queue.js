//Example of how a queue data structure works using js classes.
class Queue {
    constructor() {
        this.list = [];
        this.tail = 0;
    }

    enqueue(v) {
        this.list[this.tail] = v;
        this.tail++;
    }

    dequeue() {
        const element = this.list[0];
        this.list.shift();
        if (!element) return;
        return element;
    }

    size() {
        return this.tail;
    }

    peek() {
        return this.list[0];
    }

    show() {
        return this.list;
    }
    isEmpty(){
        return this.size() === 0;
    }
}

class QueueLinkedList {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(v) {
        this.list.addToTail(v);
    }

    dequeue() {
        return this.list.removeHead();
    }

    size() {
        return this.list.size();
    }
}

let myQ = new Queue();
myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);

console.log(myQ.dequeue());
console.log(myQ.dequeue());

console.log(myQ.dequeue());

