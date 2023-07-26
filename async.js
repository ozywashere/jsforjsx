// const fetchData = fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res) => res.json())
//   .then((data) => console.log(data))

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()
  return data
}

const todos = getTodos()

console.log(todos)
