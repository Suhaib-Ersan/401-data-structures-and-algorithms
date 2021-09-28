class Tree {
    constructor() {
        this.root = null;
    }

    preOrder() {
        /* root > left > right */
        let final = [];
        let preOrderTraverse = (leaf) => {
            final.push(leaf.value);
            if (leaf.left) preOrderTraverse(leaf.left);
            if (leaf.right) preOrderTraverse(leaf.right);
        };
        if (this.root) {
            preOrderTraverse(this.root);
        } else {
            return null;
        }
        return final;
    }

    inOrder() {
        /* left > root > right */
        let final = [];
        let inOrderTraverse = (leaf) => {
            if (leaf.left) inOrderTraverse(leaf.left);
            final.push(leaf.value);
            if (leaf.right) inOrderTraverse(leaf.right);
        };
        if (this.root) {
            inOrderTraverse(this.root);
        } else {
            return null;
        }

        return final;
    }

    postOrder() {
        /* left > right > root */
        let final = [];
        let postOrderTraverse = (leaf) => {
            if (leaf.left) postOrderTraverse(leaf.left);
            if (leaf.right) postOrderTraverse(leaf.right);
            final.push(leaf.value);
        };
        if (this.root) {
            postOrderTraverse(this.root);
        } else {
            return null;
        }

        return final;
    }
    add(val) {
        if (!isNaN(val)) {
            let node = new Node(val);

            if (!this.root) {
                this.root = node;
                return "added node successfully";
            } else {
                let addNode = (current, node) => {
                    if (node.value < current.value) {
                        if (current.left) {
                            return addNode(current.left, node);
                        } else {
                            current.left = node;
                            return "added node successfully";
                        }
                    } else if (node.value > current.value) {
                        if (current.right) {
                            return addNode(current.right, node);
                        } else {
                            current.right = node;
                            return "added node successfully";
                        }
                    } else if (node.value === current.value) {
                        return "can't store duplicate nodes";
                    } else {
                        return null;
                    }
                };
                return addNode(this.root, node);
            }
        } else {
            return "this tree accepts numbers only";
        }
    }

    contains(val) {
        return this.preOrder().includes(val);
    }
}

////////////////////////////////////////////
////////////////////////////////////////////

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
        // console.log(`>>>>>>>>> `, key);
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

function hashmapLeftJoin(tableOne, tableTwo) {
    let finArr = [];
    let arr = [];

    for (let i = 0; i < tableOne.map.length; i++) {
        arr.length = 0;
        if (tableOne.map[i]) {
            // let current = tableOne.map[i].head;
            // while (current) {
            //     arr.push(Object.keys(current.value));
            //     arr.push(Object.values(current.value));

            //     current = current.next;
            // }

            
            arr.push(Object.keys(tableOne.map[i].head.value)[0]);
            arr.push(Object.values(tableOne.map[i].head.value)[0]);

            // console.log(arr);
            if (tableTwo.map[i]) {
                // let currentTwo = tableTwo.map[i].head;
                // while (currentTwo) {
                //     arr.push(Object.values(currentTwo.value));

                //     currentTwo = currentTwo.next;
                // }

                arr.push(Object.values(tableTwo.map[i].head.value)[0]);
                // console.log(arr);
            } else {
                arr.push(null);
            }
        }
        if (tableOne.map[i]) {
            finArr.push(JSON.parse(JSON.stringify(arr)));
            
        }
    }
    
    // console.log(finArr);
    return finArr;
}

// let tableOne = new HashTable(50);
// tableOne.add("fond", "enamored");
// tableOne.add("wrath", "anger");
// tableOne.add("diligent", "employed");
// tableOne.add("outfit", "garb");
// tableOne.add("guide", "usher");

// let tableTwo = new HashTable(50);
// tableTwo.add("fond", "averse");
// tableTwo.add("wrath", "delight");
// tableTwo.add("diligent", "idle");
// tableTwo.add("guide", "usher");
// tableTwo.add("flow", "garb");


// console.log(hashmapLeftJoin(tableOne, tableTwo));

// let Ll = new HashTable(10);
// Ll.add("hey", "done");
// console.log(Ll.get("hey").returned.head.value);
// console.log(Object.keys(Ll));
module.exports = {
    hashmapLeftJoin,
    HashTable
};
