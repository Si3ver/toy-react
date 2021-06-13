// 一般节点
class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild(component) {
    this.root.appendChild(component.root)
  }
}

// 文本节点
class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content)
  }
  appendChild() {
    this.root.appendChild()
  }
}

// 自定义组件的抽象类
export class Component {
  constructor() {
    this.props = Object.create(null)
    this.children = []
    this._root = null
  }
  setAttribute(name, value) {
    this.props[name] = value
  }
  appendChild(component) {
    this.children.push(component)
  }
  get root() {
    if (!this._root) {
      this._root = this.render().root
    }
    return this._root
  }
}


// pragma
export function createElement(type, attributes, ...children) {
  let e;
  if (typeof type === 'string') {
    e = new ElementWrapper(type)
  } else { // 自定义组件，类型是 function(class)
    e = new type;
  }

  for (let p in attributes) {
    e.setAttribute(p, attributes[p])
  }

  let insertChildren = (children) => {
    for (let child of children) {
      if (typeof child === 'string') { // 文本节点
        child = new TextWrapper(child)
      }
      if (typeof child === 'object' && child instanceof Array) {
        insertChildren(child)
      } else {
        e.appendChild(child)
      }
    }
  }
  insertChildren(children)

  return e
}

// renderDom
export function render (component, paramElement) {
  paramElement.appendChild(component.root)
}
