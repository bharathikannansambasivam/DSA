class Node {
    constructor(val) {
        this.val = val;
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val)
        let current = this.root
        if (!current) {
            this.root = newNode
            return true
        } else {
            while (current) {
                if (val < current.val) {

                    if (current.left == null) {
                        current.left = newNode
                        return true
                    } else {
                        current = current.left
                    }
                } else if (val > current.val) {
                    if (current.right == null) {
                        current.right = newNode
                        return true
                    } else {
                        current = current.right
                    }
                } else {
                    return "Duplicate found"
                }
            }

            return current
        }

    }

    BFS() {
        let queue = []
          , node = this.root
          , result = []
        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            result.push(node.val)
            if (node.left)
                queue.push(node.left)
            if (node.right)
                queue.push(node.right)

        }

        return result
    }

    DFSPreOrder() {

        let node = this.root
        let result = []

        function traverse(node) {
            result.push(node.val);
            if (node.left)
                traverse(node.left)
            if (node.right)
                traverse(node.right)

        }

        traverse(node)
        return result

    }

    DFSPostOrder() {
        let node = this.root;
        let result = []
        function traverse(node) {

            if (node.left)
                traverse(node.left)
            if (node.right)
                traverse(node.right)
            result.push(node.val)

        }
        traverse(node)
        return result
    }

    DFSInOrder() {

        let node = this.root;
        let result = []
        function traverse(node) {
            if (node.left)
                traverse(node.left)
            result.push(node.val)
            if (node.right)
                traverse(node.right)

        }

        traverse(node)
        return result
    }
}

const tree = new BST()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.DFSPreOrder()
