"use strict";

const Queue = require("./queue.js");

class queueAnimalShelter {
  constructor() {
    this.queueList = new Queue();
  }

  enqueue(animalObj) {
    this.queueList.enqueue(animalObj);
  }
  dequeue(animalName) {
    /* minimum : animalObj = { animal: "dog" } */
    this.queueList.peek();
    if (!this.queueList.first) {
      return null;
    } else if (animalName !== "cat" && animalName !== "dog") {
      return null;
    } else {
      let item = this.queueList.first;
      let current = this.queueList.first;
      let currentSkipOne = 0;
      while (item) {
        if (item.value.animal === animalName) {
          current.next = item.next;
          if (this.queueList.first === item) {
            this.queueList.first = item.next;
          }
          return item;
        }
        if (currentSkipOne > 0) {
          current = item;
        }
        currentSkipOne++;
        item = item.next;
      }
      return null;
    }
  }
}

let queue = new queueAnimalShelter();
queue.enqueue({ animal: "cat" });
queue.enqueue({ animal: "cat" });
queue.enqueue({ animal: "cat" });


// console.log(queue.dequeue('cat'));

// console.log(queue.dequeue('cat'));
// console.log(queue.dequeue('cat'));
// console.log(queue.dequeue('cat'));

module.exports = queueAnimalShelter;
