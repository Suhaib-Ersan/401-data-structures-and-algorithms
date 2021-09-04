"use strict";

const QueueAnimalShelter = require("./queue-animal-shelter.js");

describe("Queue Animal Shelter", () => {
  it("should instantiate a new queueAnimalShelter", () => {
    let queue = new QueueAnimalShelter();
    expect(queue instanceof QueueAnimalShelter).toBeTruthy();
  });
  it("should be able to dequeue", () => {
    let queue = new QueueAnimalShelter();

    queue.enqueue({ animal: "dog" });
    queue.enqueue({ animal: "dog" });
    queue.enqueue({ animal: "cat" });

    expect(queue.dequeue("dog").value.animal).toEqual("dog");
    expect(queue.dequeue("dog").value.animal).toEqual("dog");
    expect(queue.dequeue("cat").value.animal).toEqual("cat");
  });
  it("should be able to get the first cat or dog depending on what we choose", () => {
    let queue = new QueueAnimalShelter();

    queue.enqueue({ animal: "dog" });
    queue.enqueue({ animal: "dog" });
    queue.enqueue({ animal: "cat" });
    queue.enqueue({ animal: "cat" });


    expect(queue.dequeue("cat").value.animal).toEqual("cat");
    expect(queue.dequeue("cat").value.animal).toEqual("cat");
    expect(queue.dequeue("dog").value.animal).toEqual("dog");
    expect(queue.dequeue("dog").value.animal).toEqual("dog");
  });
  it("should not be able to dequeue animals other than dogs or cats", () => {
    let queue = new QueueAnimalShelter();

    queue.enqueue({ animal: "dog" });
    queue.enqueue({ animal: "dog" });
    queue.enqueue({ animal: "cat" });
    queue.enqueue({ animal: "cat" });

    expect(queue.dequeue("hamster")).toEqual(null);
  });
  it("should give an exception when cats run out of the shelter", () => {
    let queue = new QueueAnimalShelter();

    queue.enqueue({ animal: "dog" });
    queue.enqueue({ animal: "cat" });

    console.dir(queue.queueList.first);
    console.dir(queue.queueList.first.next);
    console.dir(queue.queueList.first.next.next);

    expect(queue.dequeue("cat").value.animal).toEqual("cat");
    console.dir(queue.queueList.first);
    expect(queue.dequeue("cat")).toEqual(null);
  });
});
