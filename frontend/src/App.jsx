import { useEffect, useState } from 'react'
import './App.css'

// const server = "http://127.0.0.1:8000"
const server = "http://80.104.63.185:8000"

function App() {

  async function handleSubmit(event) {
    event.preventDefault();
    let form = event.target;
    let data = new FormData(form);
    let obj = Object.fromEntries(data);
    let json = JSON.stringify(obj);
    await fetch(server + "/prodotto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: json
    })

    getProdotti()
  }

  const [prodotti, setProdotti] = useState([])

  async function getProdotti() {
    let response = await fetch(server + "/prodotti")
    let data = await response.json()
    setProdotti(data)
    console.log(data)
  }

  useEffect(() => {
    getProdotti()
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" />
        <input name="price" />
        <button>+</button>
      </form>

      <ul>
        {
          prodotti.map(x => <li key={x.name}>{x.name} - {x.price}</li>)
        }
      </ul>
    </>
  )
}

export default App