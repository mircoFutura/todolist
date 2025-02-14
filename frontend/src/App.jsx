import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [prodotti, setProdotti] = useState([])

  async function getProdotti() {
    let response = await fetch("http://127.0.0.1:8000/prodotti")
    let data = await response.json()
    setProdotti(data)
    console.log(data)
  }

  useEffect(()=>{
    getProdotti()
  }, [])

  return (
    <>
      <ul>
        {
          prodotti.map(x => <li key={x.nome}>{x.nome}</li>)
        }
      </ul>
    </>
  )
}

export default App
