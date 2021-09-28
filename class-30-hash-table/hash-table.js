class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
    toString() {
        if (!this.head) {
          return "no nodes in list"
        } else {
          function stringFor(val) {
          return `{ ${val} } -> `;
        }
        let string = "";
        let current = this.head;
        while (current) {
          string = string + stringFor(current.value);
          current = current.next;
        }
        string = string + "NULL";
        return string;
        }
        
      }
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

class HashTable {
    constructor(size = 256) {
        this.size = size;
        this.map = new Array(size);
    }

    hashKeyFun(key) {
        if (typeof this.size !== "number") return { errMsg: "table size is wrong, please create a new table" };
        if (typeof key === "string") {
            let hash =
                (key.split("").reduce((acc, char) => {
                    // console.log(`${acc} || ${char} ${char.charCodeAt(0)}`);
                    return acc + char.charCodeAt(0);
                }, 0) *
                    599) %
                this.size;
            return hash;
        } else {
            return { errMsg: "please enter a valid string key" };
        }
    }

    add(key, value) {
        if (typeof this.size !== "number") return { errMsg: "table size is wrong, please create a new table" };
        let hash = this.hashKeyFun(key);
        if (hash.errMsg) return hash;
        // console.log(hash);
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        // console.log(this.map[hash]);
        let bucket = { [key]: value };
        this.map[hash].add(bucket);
    }

    get(key) {
        if (typeof this.size !== "number") return { errMsg: "table size is wrong, please create a new table" };
        if (key) {
            let hash = this.hashKeyFun(key);
            if (hash.errMsg) return hash;
            // console.log(this.map[hash]);
            return this.map[hash];
        } else {
            return { errMsg: "please enter a valid string key" };
        }
    }
    contains(key) {
        if (typeof this.size !== "number") return { errMsg: "table size is wrong, please create a new table" };
        if (key) {
            let hash = this.hashKeyFun(key);
            if (hash.errMsg) return hash;
            // console.log(this.map[hash]);
            if (this.map[hash]) {
                return true;
            } else {
                return { errMsg: "didn't find any matching key" };
            }
        } else {
            return { errMsg: "please enter a valid string key" };
        }
    }
    hash(key) {
        if (key) {
            let hash = this.hashKeyFun(key);
            if (hash.errMsg) return hash;
            // console.log(this.map[hash]);
            return hash;
        } else {
            return { errMsg: "please enter a valid string key" };
        }
    }
}

// let myhash = new HashTable(50);
// myhash.add("John", "Boss");
// myhash.add("Cathy", "The Real Boss");
// myhash.add("Zach", "Kid 1");
// myhash.add("Allie", "Kid 2");
// myhash.add('Rosie','Dog');
// myhash.add('Cat','TA');
// myhash.add('Justin','Student');
// myhash.add('Jason','Student');
// myhash.add('Ben','Student');
// myhash.add('Timea','Student');
// myhash.add('Jen','Student');
// myhash.add('Khalil','Student');
// myhash.add('Michael','Student');
// myhash.add('Ovi','Student');
// console.log(myhash.get(`John`));

// myhash.map.forEach((data, i) => {
//     console.log(i, data && data.values());
// });

// let table = new HashTable();

// table.add("John", "Boss");
// table.add("John", "The Real Boss");
// console.dir(table.get("John"));

// table.add("Jen", "Student");
// table.add("Jen", "kid");
// console.dir(table.get("Jen"));


module.exports = {
    LinkedList,
    HashTable,
};
