import { createElement } from './toy-react'

export default function main() {
  document.body.appendChild(<div id="a" class="c">
    <a href="#">link</a>
    <div>some texts!</div>
  </div>)
}
