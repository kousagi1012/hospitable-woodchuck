import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binary_tree'

describe('BinarySearchTree', () => {
  it('is a function', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  context('insert(node)', () => {
    it('inserts a node with the specified value into the tree', () => {
      const bst = new BinarySearchTree()
      bst.insert(2)
      bst.insert(1)
      bst.insert(6)
      
      expect(bst.root).to.eql({ data: 2, left: { data: 1, left: null, right: null }, right: { data: 6, left: null, right: null } })
    })
  })

  context('search(node)', () => {
    it('returns a node object if node is found', () => {
      const bst = new BinarySearchTree()
      bst.insert(3)
      bst.insert(5)
    
      expect(bst.search(5)).to.eql( { data: 5, left: null, right: null } )
    })

    it('returns null if node was not found', () => {
      const bst = new BinarySearchTree()
      bst.insert(3)
      bst.insert(5)
      
      expect(bst.search(6)).to.be.null
    })
  })

  context('remove(node)', () => {
    it('removes a value\'s node (if exists) from the tree', () => {
      const bst = new BinarySearchTree()
      bst.insert(3)
      bst.insert(2)
      bst.insert(1)
      bst.remove(7)

      expect(bst.root).to.be.null
    })
  })

  context('traverse(value)', () => {
    it('traverses the tree using in-order traversal and apply function on each node\'s value', () => {
      const bst = new BinarySearchTree()
      bst.insert(3)
      bst.insert(2)
      bst.insert(3)

      expect(bst.traverse(3)).to.be.null
    })
  })

  context('count()', () => {
    it('returns the number of nodes in the tree', () => {
      const bst = new BinarySearchTree()
      bst.insert(3)
      bst.insert(3)
      bst.insert(3)
      bst.insert(3)

      expect(bst.count()).to.eql(4)
    })
  })
})