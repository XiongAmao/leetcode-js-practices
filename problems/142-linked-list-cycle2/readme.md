给定一个链表的头节点`head`，返回链表开始入环的第一个节点。如果链表无环，则返回`null`。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 `pos` 是 `-1`，则在该链表中没有环。注意：`pos` 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。

示例 1：

```
输入：head = [3,2,0,-4], pos = 1
输出：tail connects to node index 1
解释：链表中有一个环，其尾部连接到第二个节点。
```

![](../../imgs/142/circularlinkedlist.png)

示例 2：

```
输入：head = [1,2], pos = 0
输出：tail connects to node index 0
解释：链表中有一个环，其尾部连接到第一个节点。
```

![](../../imgs/142/circularlinkedlist_test2.png)


示例 3：

```
输入：head = [1], pos = -1
输出：no cycle
解释：链表中没有环。
```

![](../../imgs/142/circularlinkedlist_test3.png)
 


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

---

Given the `head` of a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's `next` pointer is connected to (0-indexed). It is `-1` if there is no cycle. Note that `pos` is not passed as a parameter.

**Do not modify** the linked list.


Example 1:

```
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

![](../../imgs/142/circularlinkedlist.png)


Example 2:

```
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

![](../../imgs/142/circularlinkedlist_test2.png)


Example 3:

```
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
```

![](../../imgs/142/circularlinkedlist_test3.png)


Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 

Follow up: Can you solve it using O(1) (i.e. constant) memory?

link: https://leetcode.com/problems/linked-list-cycle-ii


