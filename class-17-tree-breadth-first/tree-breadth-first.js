"use strict";

const TreeMax = require("../class-16-tree-max/tree-max.js");

class TreeBreadthFirst extends TreeMax {
  constructor() {
    super();
  }

  breadthFirst() {
    if (!this.root) {
      return null;
    }
    let finalArr = []; // final array that will be pushed
    let laterNodesArr = [{value: 0, left: this.root, right: null}]; // nodes that will be run through the functions in the next cycle
    // it has a dummy node that will allow the script to start running


    function addLRToArr(leaf) {
      /* first you push the value of the current leaf, then you add it's left and right nodes to be processed in the next cycle */
      // console.log('leaf >>> ', leaf.value);
      finalArr.push(leaf.value);
      if (leaf.left) {
        // console.log(`leaf left > ${leaf.left.value}`);
        laterNodesArr.push(leaf.left);
      }
      if (leaf.right) {
        // console.log(`leaf right > ${leaf.right.value}`);
        laterNodesArr.push(leaf.right);
      }
      // console.log("\n");
    }

    let breadthFirstTraverse = () => {
      // console.log("breadthFirstTraverse ran");
      let nodeArrBackup = laterNodesArr.splice("");
      laterNodesArr.length = 0;

      for (let i = 0; i < nodeArrBackup.length; i++) {


        // console.log("laterNodesArr.length before ", laterNodesArr.length);
        addLRToArr(nodeArrBackup[i]);
        // console.log("laterNodesArr.length after ", laterNodesArr.length);
      }
    };

    // console.log("laterNodesArr.length >>> ",laterNodesArr.length);
    while (laterNodesArr.length !== 0) {
      breadthFirstTraverse();
    }  

    finalArr.shift()
    return finalArr;
  }
}


// let treeee = new TreeBreadthFirst();
// treeee.add(5);
// treeee.add(6);
// treeee.add(8);
// treeee.add(2);
// treeee.add(1);
// treeee.add(3);
// treeee.add(4);
// treeee.add(12);
// treeee.add(18);

// console.log(treeee.breadthFirst());



module.exports = TreeBreadthFirst;
