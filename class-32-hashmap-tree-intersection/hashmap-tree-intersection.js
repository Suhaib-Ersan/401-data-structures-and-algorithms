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
// function repeatedWord(string) {
//     let table = new HashTable();
//     let arr = string.replace(/\W/g, " ").replace(/[ ]+/g, " ").toLowerCase().split(" ");
//     // console.log(arr)

//     let firstWord = null;
//     for (let i = 0; i < arr.length; i++) {
//         let containCheck = table.contains(arr[i]);
//         // console.log(containCheck, i+1);
//         if (containCheck.errMsg) {
//             // console.log(`ran ${i+1}`);
//             table.add(arr[i], arr[i]);
//         } else {
//             firstWord = arr[i];
//             break;
//         }
//     }

//     // console.log(table.get("a"));
//     if (firstWord) {
//         return { returned: true, firstRepeatedWord: firstWord };
//     } else {
//         return { returned: null, errMsg: "there are no matching words" };
//     }
// }

function hashmapTreeIntersection(treeOne, treeTwo) {
    if (!treeOne) return { returned: null, errMsg: "tree number one is not a valid" };
    if (!treeTwo) return { returned: null, errMsg: "tree number two is not a valid" };
    if (!treeOne.root) return { returned: null, errMsg: "root of tree number one is not a valid" };
    if (!treeTwo.root) return { returned: null, errMsg: "root of tree number two is not a valid" };

    let arr = [];

    let table = new HashTable();
    let preOne = treeOne.preOrder();
    // console.log(treeOne);
    for (let i = 0; i < preOne.length; i++) {
        table.add(`${preOne[i]}`, `${preOne[i]}`);
        // console.log(preOne[i]);
    }

    let preTwo = treeTwo.preOrder();
    for (let i = 0; i < preTwo.length; i++) {
        // console.log(`${preTwo[i]}`);
        let check = table.contains(`${preTwo[i]}`, `${preTwo[i]}`);
        // console.log(check);
        if (!check.errMsg) {
            arr.push(preTwo[i]);
        }
    }
    if (arr.length < 1) return { returned: null, errMsg: "there are no intersection between trees" };
    return arr;
}


// let tree1 = new Tree();

// tree1.add(9);
// tree1.add(8);
// tree1.add(2);
// tree1.add(10);
// tree1.add(12);
// tree1.add(3);
// tree1.add(1);
// tree1.add(7);
// tree1.add(21);

// let tree2 = new Tree();

// tree2.add(20);
// tree2.add(9);
// tree2.add(5);
// tree2.add(2);
// tree2.add(21);
// tree2.add(7);
// tree2.add(8);
// tree2.add(6);
// tree2.add(3);

// console.log(hashmapTreeIntersection(tree1, tree2));

module.exports = {
    hashmapTreeIntersection,
};
