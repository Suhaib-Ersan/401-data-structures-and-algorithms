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
            return null;
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
    includes(key) {
        if (!this.head) return null;
        let current = this.head;
        // console.log(this.head.value[key]);
        // console.log(`${current.value.value} || ${key}`);
        while (current) {
            if (current.value[key] === key) {
                // console.log('ran');
                return true;
            }
            current = current.next;
        }
        return null;
    }
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

class HashTable {
    constructor(size = 256) {
        this.size = size;
        this.map = new Array(size);
    }
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    // ! internal functions ! //
    generalCheck(key) {
        if (typeof this.size !== "number") return { returned: null, errMsg: "table size is not a number, please create a new table" };
        if (this.size < 1) return { returned: null, errMsg: "table size can't be 0 or less" };
        if (key) if (typeof key !== "string") return { returned: null, errMsg: "please enter a valid string key" };

        return { returned: true };
    }
    hashKeyFun(key) {
        let hash =
            (key.split("").reduce((acc, char) => {
                // console.log(`${acc} || ${char} ${char.charCodeAt(0)}`);
                return acc + char.charCodeAt(0);
            }, 0) *
                599) %
            this.size;
        return hash;
    }

    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    // ! stand alone functions ! //
    add(key, value) {
        let check = this.generalCheck(key);
        if (check.errMsg) return check;

        let hash = this.hashKeyFun(key);
        // console.log(hash);
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        // console.log(this.map[hash]);
        let bucket = { [key]: value };
        this.map[hash].add(bucket);
    }
    get(key) {
        let check = this.generalCheck(key);
        if (check.errMsg) return check;

        let hash = this.hashKeyFun(key);
        return { returned: this.map[hash] };
    }
    hash(key) {
        let check = this.generalCheck(key);
        if (check.errMsg) return check;

        let hash = this.hashKeyFun(key);
        return { returned: hash };
    }
    contains(key) {
        // console.log("🚀 ~ file: hashmap-repeated-word.js ~ line 126 ~ HashTable ~ contains ~ key", key)
        let check = this.generalCheck(key);
        if (check.errMsg) return check;
        
        let hash = this.hashKeyFun(key);
        // console.log(this.map[hash] ? true : false, `${hash} || ${key}`);
        if (this.map[hash]) {
            return this.map[hash].includes(key) ? { returned: true } : { returned: null, errMsg: "didn't find any matching key" };
        } else {
            return { returned: null, errMsg: "didn't find any matching key" };
        }
    }
}
function repeatedWord(string) {
    let table = new HashTable();
    let arr = string.replace(/\W/g, " ").replace(/[ ]+/g, " ").toLowerCase().split(" ");
    // console.log(arr)
    
    let firstWord = null;
    for (let i = 0; i < arr.length; i++) {
        let containCheck = table.contains(arr[i]);
        // console.log(containCheck, i+1);
        if (containCheck.errMsg) {
            // console.log(`ran ${i+1}`);
            table.add(arr[i], arr[i]);
        } else {
            firstWord = arr[i];
            break;
        }
    }

    // console.log(table.get("a"));
    if (firstWord) {
        return { returned: true, firstRepeatedWord: firstWord };
    } else {
        return { returned: null, errMsg: "there are no matching words" };
    }
}
// console.log(repeatedWord("a time, there was a brave princess who..."));
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
    repeatedWord
};
