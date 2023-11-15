import { useEffect, useState } from 'react'
import './Shelf.css'
import Add from './Add.jsx'
import Item from './Item.jsx'
import FileUpload from './FileUpload.jsx'

const getLocalData = () => {
  const data = JSON.parse(localStorage.getItem("items"));
  if (!data) return [];
  return data;
};
 
function Shelf() {
  const [items, setItems] = useState(() => getLocalData())

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (title, author, publication_date) => {
    setItems((prevTodos) => {
      return [
        ...prevTodos,
        { 
          title: title,
          author: author,
          publication_date: publication_date,
          id: crypto.randomUUID()
        },
      ];
    });
  };

  const handleFileInput = (e) => {
    onFileSelect(e.target.files[0])
  }

  return (
    <>
    <Add addItem={addItem}/>
    <form>
      <FileUpload/>
    </form>
    <table>
      <colgroup>
        <col className="title"/>
        <col className="author"/>
        <col className="date"/>
      </colgroup>
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
            <Item
                key={item.id}
                data={item}
            /> 
        ))}
      </tbody>
    </table>
    </>
  )

}

export default Shelf