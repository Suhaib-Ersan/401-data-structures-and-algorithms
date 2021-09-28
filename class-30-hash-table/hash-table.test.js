const { LinkedList, HashTable } = require("./hash-table.js");

describe("Hash Table", () => {
    it("should make an instance of a hash table", () => {
        let table = new HashTable();
        expect(table).toBeInstanceOf(HashTable);
    });
    it("should successfully add multiple pieces of data to the table, checking using the 'contains' method", () => {
        let table = new HashTable();
        table.add("John", "Boss");
        expect(table.contains("John")).toBe(true);
        table.add("Cathy", "The Real Boss");
        expect(table.contains("Cathy")).toBe(true);
        table.add("Zach", "Kid 1");
        expect(table.contains("Zach")).toBe(true);
        table.add("Allie", "Kid 2");
        expect(table.contains("Allie")).toBe(true);
    });
    it("should successfully handle collisions, checking using 'get' method", () => {
        let table = new HashTable();
        
        table.add("John", "Boss");
        table.add("John", "The Real Boss");
        expect(table.get("John")).toEqual({
            head: {
                value: { John: "Boss" },
                next: {
                    value: { John: "The Real Boss" },
                    next: null,
                },
            },
        });

        table.add("Jen", "Student");
        table.add("Jen", "kid");
        expect(table.get("Jen")).toEqual({
            head: {
                value: { Jen: "Student" },
                next: {
                    value: { Jen: "kid" },
                    next: null,
                },
            },
        });

        table.add("Khalil", "Student");
        table.add("Khalil", "Student");
        expect(table.get("Khalil")).toEqual({
            head: {
                value: { Khalil: "Student" },
                next: {
                    value: { Khalil: "Student" },
                    next: null,
                },
            },
        });
    });
    it("should successfully return the correct hashed key", () => {
        let table = new HashTable();
        table.add("John", "Boss");
        expect(table.hash("John")).toBe(153);
        table.add("Cathy", "The Real Boss");
        expect(table.hash("Cathy")).toBe(159);
        table.add("Zach", "Kid 1");
        expect(table.hash("Zach")).toBe(138);
        table.add("Allie", "Kid 2");
        expect(table.hash("Allie")).toBe(129);
    });
});
