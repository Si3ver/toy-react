import { createElement, Component, render } from './toy-react'

// 自定义组件
class MyComponent extends Component {
  render () {
    return <div>
      <div>abc</div>
      {this.children}
    </div>
  }
}

export default function main() {
  render(<MyComponent id="a" class="c">
    <a href="#">link</a>
    <div>some texts!</div>
  </MyComponent>, document.body)
}
