const { hashmapLeftJoin, HashTable } = require("./hashmap-left-join.js");

describe("Hashmap Left Join", () => {
    it("should return the correct left-joined hash tables", () => {
        let tableOne = new HashTable(50);
        tableOne.add("fond", "enamored");
        tableOne.add("wrath", "anger");
        tableOne.add("diligent", "employed");
        tableOne.add("outfit", "garb");
        tableOne.add("guide", "usher");

        let tableTwo = new HashTable(50);
        tableTwo.add("fond", "averse");
        tableTwo.add("wrath", "delight");
        tableTwo.add("diligent", "idle");
        tableTwo.add("guide", "usher");
        tableTwo.add("flow", "garb");

        expect(hashmapLeftJoin(tableOne, tableTwo)).toEqual([
            ["wrath", "anger", "delight"],
            ["diligent", "employed", "idle"],
            ["guide", "usher", "usher"],
            ["fond", "enamored", "averse"],
            ["outfit", "garb", null],
        ]);
    });
    it("should return the correct left-joined hash tables", () => {
        let tableOne = new HashTable(50);
        tableOne.add("ahmad", "cat");
        tableOne.add("mohamed", "moon");
        tableOne.add("suhaib", "car");
        tableOne.add("tariq", "cloud");
        tableOne.add("omar", "sun");

        let tableTwo = new HashTable(50);
        tableTwo.add("ahmad", "student");
        tableTwo.add("mohamed", "teacher");
        tableTwo.add("suhaib", "TA");
        tableTwo.add("tariq", "student");
        tableTwo.add("omar", "teacher");

        console.log(hashmapLeftJoin(tableOne, tableTwo));

        expect(hashmapLeftJoin(tableOne, tableTwo)).toEqual([
            ["tariq", "cloud", "student"],
            ["suhaib", "car", "TA"],
            ["mohamed", "moon", "teacher"],
            ["ahmad", "cat", "student"],
        ]);
    });
});
