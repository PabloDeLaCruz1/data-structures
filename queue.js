//Example of how a queue data structure works using js classes.
class Queue {
    constructor() {
        this.list = [];
        this.head = 0;
        this.tail = 0;
    }

    enqueue(v) {
        this.list[this.tail] = v;
        this.tail++;
    }

    dequeue() {
        const element = this.list[this.head];
        this.list.shift();
        if (!element) return;
        this.head++;
        return element;
    }

    size() {
        return this.tail - this.head;
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
