const { Graph, Node } = require("./graph.js");

describe("graphs", () => {
    it("should add nodes successfully", () => {
        const graph = new Graph();

        const one = new Node(1);
        const two = new Node(2);
        const three = new Node(3);

        graph.addNode(one);
        graph.addNode(two);
        graph.addNode(three);

        expect(graph.getValues()).toEqual([1, 2, 3]);
    });
    it("should get neighbors successfully", () => {
        const graph = new Graph();

        const one = new Node(1);
        const two = new Node(2);
        const three = new Node(3);
        const four = new Node(4);
        const five = new Node(5);
        const six = new Node(6);
        const seven = new Node(7);
        const eight = new Node(8);

        graph.addNode(one);
        graph.addNode(two);
        graph.addNode(three);
        graph.addNode(four);
        graph.addNode(five);
        graph.addNode(six);
        graph.addNode(seven);
        graph.addNode(eight);

        graph.addEdge(one, three, 5);
        graph.addEdge(one, six);
        graph.addEdge(one, seven);
        graph.addEdge(one, eight);
        graph.addEdge(six, seven, 3);
        graph.addEdge(seven, eight);
        graph.addEdge(eight, three, 2);
        graph.addEdge(three, two, -8);

        expect(graph.getNeighbors(eight)).toEqual([1,7]);
    });
    it("should return the correct size", () => {
        const graph = new Graph();

        const one = new Node(1);
        const two = new Node(2);
        const three = new Node(3);
        const four = new Node(4);
        const five = new Node(5);
        const six = new Node(6);
        const seven = new Node(7);
        const eight = new Node(8);

        graph.addNode(one);
        graph.addNode(two);
        graph.addNode(three);
        graph.addNode(four);
        graph.addNode(five);
        graph.addNode(six);
        graph.addNode(seven);
        graph.addNode(eight);

        expect(graph.size()).toEqual(8);
    });
});
