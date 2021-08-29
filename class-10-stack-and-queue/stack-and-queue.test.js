'use strict';

"use strict";

const { Stack, Queue } = require("./stack-and-queue.js");
const Node = require("./node.js");

describe("Stack testing", () => {
  it("should return a node", async () => {
    let final = new Node(1);
    expect(final).toEqual({"next": null, "value": 1});
  });
  it("Can successfully push onto a stack", async () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });
  it("Can successfully push multiple values onto a stack", async () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });
  it("Can successfully pop off the stack", async () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
  });
  it("Can successfully empty a stack after multiple pops", async () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3); 
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(null);
  });
  it("Can successfully peek the next item on the stack", async () => {
    let stack = new Stack();
    stack.push(1);
    let val1 = stack.peek();
    stack.push(2);
    let val2 = stack.peek();
    stack.push(3);
    let val3 = stack.peek();
    expect(val1).toBe(1);
    expect(val2).toBe(2);
    expect(val3).toBe(3);
  });
  it("Can successfully instantiate an empty stack", async () => {
    let stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
  });
  it("Calling pop or peek on empty stack raises exception", async () => {
    let stack = new Stack();
    expect(stack.pop()).toBe(null);
  });
  
});

describe("Queue testing", () => {
  it("Can successfully enqueue into a queue", async () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
  });
  it("Can successfully enqueue multiple values into a queue", async () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });
  it("Can successfully dequeue out of a queue the expected value", async () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });
  it("Can successfully peek into a queue, seeing the expected value", async () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });
  it("Can successfully empty a queue after multiple dequeues", async () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(null);
  });
  it("Can successfully instantiate an empty queue", async () => {
    let queue = new Queue();
    expect(queue).toBeInstanceOf(Queue);
  });
  it("Calling dequeue or peek on empty queue raises exception", async () => {
    let queue = new Queue();
    expect(queue.peek()).toBe(null);
  });
  
});
