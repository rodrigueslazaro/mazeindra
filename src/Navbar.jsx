import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
//   const [fileExists, setFileExists] = useState(true); // State to track file existence

//   const handleDelete = () => {
//     onDelete(data.id); // Call the delete function passed from Shelf component
//   };

  return (
    <nav class="navbar">
      <ul>
        <li class="logo"><span class="logo-m">m</span>azeindra</li>
        <li class="search">
            <img class="icon" src="search.png"/>
            <input type="text" placeholder="Filter..."></input>
        </li>
        <li class="settings"><img class="icon" src="settings.png"></img></li>
      </ul>
    </nav>
  )

}

export default Navbar