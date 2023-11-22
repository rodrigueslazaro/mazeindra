import { useState } from 'react'
import './App.css'
import Shelf from './Shelf.jsx'
import Sidebar from './Sidebar.jsx'
import Details from './Details.jsx'
import Navbar from './Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main class="app-view">
      <Navbar/>
      <article class="main-content">
        <Sidebar class="sidebar"/>
        <Shelf class="shelf"/>
        <Details class="detail"/>
      </article>
    </main>
  )
}

export default App