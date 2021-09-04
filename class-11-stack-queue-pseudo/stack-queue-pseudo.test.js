"use strict";

const PseudoQueue = require("./stack-queue-pseudo.js");

describe("Pseudo Queue", () => {
  it("should instantiate a new Pseudo Queue", () => {
    let queue = new PseudoQueue();
    expect(queue instanceof PseudoQueue).toBeTruthy();
  });
  it("should enqueue and dequeue in correct order", () => {
    let queue = new PseudoQueue();

    queue.enqueue(1);
    queue.enqueue("A");

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual("A");
  });
  it("should empty a queue after multiple dequeues", () => {
    let queue = new PseudoQueue();

    queue.enqueue(1);
    queue.enqueue("A");

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual("A");
    expect(queue.dequeue()).toBeNull();
  });
});
