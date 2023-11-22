import { useState, useEffect } from 'react'
import './Sidebar.css'

function Sidebar() {
//   const [fileExists, setFileExists] = useState(true); // State to track file existence

//   const handleDelete = () => {
//     onDelete(data.id); // Call the delete function passed from Shelf component
//   };

  return (
    <nav class="sidebar">
      <h1 class="tags">Tagsuai</h1>
      <section class="tags-1">cool
        <button>Add new</button>
        <ul>
          <li class="tag-1">1 - Mathematics</li>
        </ul>
      </section>

    </nav>
  )

}

export default Sidebar