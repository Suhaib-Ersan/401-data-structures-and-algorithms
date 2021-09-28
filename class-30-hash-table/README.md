# Hash Tables
It's a data table that by hashing each data key (not value) as a number, it allows us to have consistent access time to these data.

## Challenge
Implement a Hashtable Class with the following methods:

* add
  * Arguments: key, value
  * Returns: nothing
  * This method should hash the key, and add the key and value pair to the table, handling collisions as needed.

* get
  * Arguments: key
  * Returns: Value associated with that key in the table

* contains
  * Arguments: key
  * Returns: Boolean, indicating if the key exists in the table already.

* hash
  * Arguments: key
  * Returns: Index in the collection for that key


## Approach & Efficiency
| Approach | Efficiency |
| - | - |
| Add | O(n) time and O(1) space. |
| get | O(1) time and O(1) space. |
| contains | O(1) time and O(1) space. |
| hash | O(1) time and O(1) space. |

## API
Available in the `Challenge` tag above.

[Go to table of contents](https://suhaib-ersan.github.io/401-data-structures-and-algorithms)
