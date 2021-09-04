"use strict";

const StackQueueBrackets = require("./stack-queue-brackets.js");

describe("Stack Queue Brackets", () => {
  it("should instantiate a new StackQueueBrackets", () => {
    let stack = new StackQueueBrackets();
    expect(stack instanceof StackQueueBrackets).toBeTruthy();
  });

  it("should return true to {}", () => {
    let stack = new StackQueueBrackets();

    expect(stack.stackQueueBrackets('{}')).toBe(true);
  });

  it("should return true to {}{Code}[Fellows](())", () => {
    let stack = new StackQueueBrackets();

    expect(stack.stackQueueBrackets('{}{Code}[Fellows](())')).toBe(true);
  });

  it("should return false to [({}]", () => {
    let stack = new StackQueueBrackets();

    expect(stack.stackQueueBrackets('[({}]')).toBe(false);
  });
});
