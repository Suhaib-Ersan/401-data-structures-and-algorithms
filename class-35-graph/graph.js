class Node {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(node, weight) {
        this.node = node;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addNode(node) {
        // each map object will have start vertex and an array of edges
        this.adjacencyList.set(node, [
            /* edge with the end vertex*/
        ]);
    }

    addEdge(edgeStart, edgeEnd, weight = 0) {
        if (!this.adjacencyList.has(edgeStart) || !this.adjacencyList.has(edgeEnd)) {
            console.error("didn't find a node that was entered");
            return;
        }

        let list = this.adjacencyList.get(edgeStart);
        list.push(new Edge(edgeEnd, weight));
    }

    getNodes() {
        return this.adjacencyList;
    }

    getValues() {
        let arr = [];
        this.adjacencyList.forEach((value, key) => {
            arr.push(key.value);
        });
        return arr;
    }

    getNeighbors(node) {
        if (!node) return null;
        let val;
        if (node.value) {
            val = node.value;
        } else {
            val = node;
        }
        console.log(val);
        let arr = [];
        this.adjacencyList.forEach((value, key) => {
            for (let i = 0; i < value.length; i++) {
                // console.log(`${val} || `, value[0].node.value);
                if (value[i].node.value === val) {
                    arr.push(key.value);
                }
            }
        });
        return arr;
    }
    size() {
        return this.adjacencyList.size;
    }
}

/// this code is to test the graph

// const graph = new Graph();

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// const five = new Node(5);
// const six = new Node(6);
// const seven = new Node(7);
// const eight = new Node(8);

// graph.addNode(one);
// graph.addNode(two);
// graph.addNode(three);
// graph.addNode(four);
// graph.addNode(five);
// graph.addNode(six);
// graph.addNode(seven);
// graph.addNode(eight);

// graph.addEdge(one, three, 5);
// graph.addEdge(one, six);
// graph.addEdge(one, seven);
// graph.addEdge(one, eight);
// graph.addEdge(six, seven, 3);
// graph.addEdge(seven, eight);
// graph.addEdge(eight, three, 2);
// graph.addEdge(three, two, -8);

// graph.getNeighbors(eight);
// console.log(graph.getNeighbors(eight));
// graph.size();
// console.log(graph.size());
// console.log(graph.getValues());

module.exports = { Graph, Node };
