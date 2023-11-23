import { useState, useEffect } from 'react'
import './Sidebar.css'

function Sidebar() {
  const [tagInputs, setTagInputs] = useState([]); // State to track file existence

//   const handleDelete = () => {
//     onDelete(data.id); // Call the delete function passed from Shelf component
//   };
  return (
    <nav class="sidebar">
      <h1 class="tags">Tags</h1>
      <h2>Main</h2>
      <section class="tags-1">
        <button onClick={() => setTagInputs([1, 0 ,0])}>+</button>
        {tagInputs[0] ? <input class="tag" type='text'></input> : <></>}
        <ul>
          <li class="tag">Mathematics</li>
          <li class="tag">Philosophy</li>
          <li class="tag">Computer Science</li>
        </ul>
      </section>
      <h2>Secondary</h2>
      <section class="tags-1">
        <button onClick={() => setTagInputs([0, 1, 0])}>Add new</button>
        {tagInputs[1] ? <input type='text'></input> : <></>}
        <ul>
          <li class="tag-1"></li>
        </ul>
      </section>
      <h2>Tertiary</h2>
      <section class="tags-1">
        <button onClick={() => setTagInputs([0, 0, 1])}>Add new</button>
        {tagInputs[2] ? <input type='text'></input> : <></>}
        <ul>
          <li class="tag-1"></li>
        </ul>
      </section>
    </nav>
  )

}

export default Sidebar