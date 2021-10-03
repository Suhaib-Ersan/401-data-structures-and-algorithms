# graph
Implement your own Graph. The graph should be represented as an adjacency list.

## Challenge
should include the following methods:

* add node
  * Arguments: value
  * Returns: The added node
  * Add a node to the graph

* add edge
  * Arguments: 2 nodes to be connected by the edge, weight (optional)
  * Returns: nothing
  * Adds a new edge between two nodes in the graph
  * If specified, assign a weight to the edge
  * Both nodes should already be in the Graph

* get nodes
  * Arguments: none
  * Returns all of the nodes in the graph as a collection (set, list, or similar)

* get neighbors
  * Arguments: node
  * Returns a collection of edges connected to the given node
  * Include the weight of the connection in the returned collection

* size
  * Arguments: none
  * Returns the total number of nodes in the graph


## Approach & Efficiency
| Approach | Efficiency |
| - | - |
| addNode | O(1) time and O(1) space. |
| addEdge | O(n) time and O(1) space. |
| getNodes | O(1) time and O(1) space. |
| getNeighbors | O(n) time and O(1) space. |
| size | O(1) time and O(1) space. |

## Whiteboard

[Whiteboard can be viewed here]()

<br/><br/><br/>

[Go to table of contents](https://suhaib-ersan.github.io/401-data-structures-and-algorithms)
