export default function bar() {
  console.log(123)
  for (let item of ['alice', 'bob']) {
    console.log(`name: ${item}`)
  }
}
