const { hashmapTreeIntersection } = require("./hashmap-tree-intersection.js");
const Tree = require("../class-15-trees/binary-search-tree.js");

describe("Hashmap Tree Intersection", () => {
    it("should check for two tree intersections correctly", () => {
        let tree1 = new Tree();

        tree1.add(9);
        tree1.add(8);
        tree1.add(2);
        tree1.add(10);
        tree1.add(12);
        tree1.add(3);
        tree1.add(1);
        tree1.add(7);
        tree1.add(21);

        let tree2 = new Tree();

        tree2.add(20);
        tree2.add(9);
        tree2.add(5);
        tree2.add(2);
        tree2.add(21);
        tree2.add(7);
        tree2.add(8);
        tree2.add(6);
        tree2.add(3);

        expect(hashmapTreeIntersection(tree1, tree2)).toEqual([ 9, 2, 3, 7, 8, 21 ]);
    });
    it("should check for two tree intersections correctly", () => {
        let tree1 = new Tree();

        tree1.add(9);
        tree1.add(8);
        tree1.add(21);

        let tree2 = new Tree();

        tree2.add(20);
        tree2.add(8);
        tree2.add(6);

        expect(hashmapTreeIntersection(tree1, tree2)).toEqual([ 8 ]);
    });
    it("should return an object with a 'returned' key with a value of null", () => {
        let tree1 = new Tree();

        tree1.add(9);
        tree1.add(5);
        tree1.add(21);

        let tree2 = new Tree();

        tree2.add(20);
        tree2.add(8);
        tree2.add(6);

        expect(hashmapTreeIntersection(tree1, tree2).returned).toBe(null);
    });
});
