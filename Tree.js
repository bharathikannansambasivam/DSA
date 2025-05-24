class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val)
        if (this.root == null) {
            this.root = newNode
        } else {
            let current = this.root;
            while (true) {
                if (val <= current.val) {
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
                }
            }

        }
    }
    find(val) {
        let current = this.root;
        let found = false
        if (this.root == null)
            return false;

        while (current) {
            if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            } else {
                return current
            }
        }
        return undefined
    }

    remove(val) {
        if (this.root == null)
            return false;
        let current = this.root;
        while (current) {
            if (val <= current.val) {
                if (val == current.val) {
                    
                    current = current.left;
                    current.left=null
                    return true
                }
current=current.left;
            }
        }
    }
}

const tree = new BST()
