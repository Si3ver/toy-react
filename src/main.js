export default function main() {

  function createElement(tagName, attributes, ...children) {
    let e = document.createElement(tagName);

    for (let p in attributes) {
      e.setAttribute(p, attributes[p])
    }

    for (let child of children) {
      if (typeof child === 'string') {
        child = document.createTextNode(child)
      }
      e.appendChild(child)
    }

    return e
  }

  window.a = (
    <div id="a" class="c">
      <a href="#">link</a>
      <div>some texts!</div>
    </div>
  )
  console.log(a)
  document.body.append(window.a)
}
