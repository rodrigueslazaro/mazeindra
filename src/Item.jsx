import { useState, useEffect } from 'react'
import './Item.css'

function Item({ data, deleteMode, onDelete }) {
  const [filePrefix, setFilePrefix] = useState('/home/lazaro/Downloads'); // Default file path
  const [fileExists, setFileExists] = useState(true); // State to track file existence
  const pdfFilePath = `${filePrefix}/${data.id}.pdf`; // Construct the file path

  const handleDelete = () => {
    onDelete(data.id); // Call the delete function passed from Shelf component
  };

  return (
    <tr>
      <th>
        <a href={`file://${pdfFilePath}`} target="_blank" rel="noopener noreferrer">
          {data.title}
        </a>
      </th>
      <th>{data.author.split("and")[0]}</th>
      <th>{data.publication_date}</th>
      {deleteMode && (
        <th>
          <button onClick={handleDelete} className="deleteButton">
            DELETE
          </button>
        </th>
      )}
    </tr>
  )

}

export default Item