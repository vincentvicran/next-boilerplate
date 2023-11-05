import React, {Children, Component} from 'react'

const isObject = (value: any) => typeof value === 'object' && value !== null

export const reactNodeIsOfType = (node: any, type: any) =>
  isObject(node) && node.type === type

export const hasInnerComponent = (
  children: React.ReactNode,
  Component: Component
) => {
  let childrenElement
  Children.forEach(children, (child) => {
    if (reactNodeIsOfType(child, Component)) {
      childrenElement = child
    }
  })

  return childrenElement
}

export const getNewChildren = (
  children: React.ReactNode,
  components: any[]
) => {
  var newChildren = children

  components.map((component, index) => {
    const getNewChildrenWithin = (children: any) => {
      newChildren = Children.toArray(children).filter((child) => {
        return !reactNodeIsOfType(child, component)
      })
    }
    return index < components.length && getNewChildrenWithin(newChildren)
  })

  return newChildren
}
