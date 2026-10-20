  console.log(`CAMPUS IT SUPPORT REQUEST MANAGER`);
  console.log(``);
  class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }
    
    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length -1];
    }

isEmpty() {
    return this.items.length === 0;
}

size() {
    return this.items.length;
}

toString() {
    return this.items.join(`, `);
}
  }

console.log(`PART A: UNDO HISTORY`)

const actionHistory = new Stack();

//3 push
actionHistory.push(`Opened Ticket #101`);
actionHistory.push(`Assigned Ticket #101`);
actionHistory.push(`Closed Ticket #101`);

//peek, pop, toString, size
console.log(`Top Action: `, actionHistory.peek());
console.log(`Undo Action: `, actionHistory.pop());
console.log(`Remaining Actions: `, actionHistory.toString());
console.log(`Stack size: `, actionHistory.size());

console.log(``);

//part b FIFO(First in first out)
class Queue{
    constructor() {
    this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    toString() {
        return this.items.join(`, `);
    }
    
}

console.log(`PART B: WAITING REQUESTS`);

const waitingRequest = new Queue();

// enqueue
waitingRequest.enqueue(`Ticket #201 - Password Reset`);
waitingRequest.enqueue(`Ticket #202 - No Internet`);
waitingRequest.enqueue(`Ticket #203 - Printer Problem`);
waitingRequest.enqueue(`Ticket #204 - Software Installation`);

//front
console.log(`Next Request: `, waitingRequest.front());
//dequeue
console.log(`Processed: `, waitingRequest.dequeue());
console.log(`Processed: `, waitingRequest.dequeue());
//toString
console.log(`Remaining Requests: `, waitingRequest.toString());
//size
console.log(`Queue Size: `, waitingRequest.size());


// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {
  constructor() {
    // TODO: Create the internal storage.
    this.items = [];  
  }

  enqueue(request, priority) {
    // TODO: Create an item containing the request and priority.
    // TODO: Find the correct insertion position.
    // TODO: Preserve arrival order when priorities are equal.
    const queItem = {request, priority};
    let addAt = -1;

    for (let a = 0; a < this.items.length; a++) {
      if  (this.items[a].priority > priority) {
        this.items.splice(a, 0,queItem);
        addAt = a;
        break;
      }
    }
    if (addAt === -1) {
      this.items.push(queItem);
    }
  }

  dequeue() {
    // TODO: Remove and return the first item.
    return this.items.shift();
  }

  size() {
    // TODO: Return the number of items.
    return this.items.length;
  }

  print() {
    // TODO: Display every request and priority.
    this.items.forEach((item) => {
    console.log(`${item.request}, Priority ${item.priority}`);
  });
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// TODO: Enqueue the four required requests.
// TODO: Print the initial priority order.
// TODO: Process the first request.
// TODO: Print the remaining requests.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

console.log(`Initial priority order: `);
urgentRequests.print();
const processedUr = urgentRequests.dequeue();
console.log(`Processed Request: ${processedUr.request}, Priority ${processedUr.priority} `);
console.log(`Remaining Priority Request: `);
urgentRequests.print();

// ================================================================
// PART D: LINKED LIST
// ================================================================

class Node {
  constructor(element) {
    // TODO: Store the element.
    // TODO: Set next to null.
  }
}

class LinkedList {
  constructor() {
    // TODO: Set length to zero.
    // TODO: Set head to null.
  }

  append(element) {
    // TODO: Add a node at the end.
  }

  insert(position, element) {
    // TODO: Reject invalid positions.
    // TODO: Insert at the beginning, middle, or end.
  }

  removeAt(position) {
    // TODO: Reject invalid positions.
    // TODO: Remove the node at the requested position.
  }

  indexOf(element) {
    // TODO: Traverse and return the matching position.
    // TODO: Return -1 when the element is absent.
  }

  remove(element) {
    // TODO: Reuse indexOf and removeAt.
  }

  isEmpty() {
    // TODO: Return true when no nodes exist.
  }

  size() {
    // TODO: Return the number of nodes.
  }

  toString() {
    // TODO: Traverse and return all elements as text.
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// TODO: Append the three required requests.
// TODO: Insert Ticket #400 at position 0.
// TODO: Insert Ticket #405 at the end.
// TODO: Display the complete list.
// TODO: Search for Ticket #402.
// TODO: Remove the item at position 1.
// TODO: Remove Ticket #403 by value.
// TODO: Display the final list and size.