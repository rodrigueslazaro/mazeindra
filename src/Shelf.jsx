import { useEffect, useState } from 'react'
import './Shelf.css'
import Add from './Add.jsx'
import Item from './Item.jsx'
import FileUpload from './FileUpload.jsx'
import bib2json from 'bib2json'

const getLocalData = () => {
  const data = JSON.parse(localStorage.getItem("items"));
  if (!data) return [];
  return data;
};
 
function Shelf() {
  const [items, setItems] = useState(() => getLocalData())
  const [deleteMode, setDeleteMode] = useState(false)
  const [prevSortOrder, setSortOrder] = useState({});

  const toggleDeleteMode = () => {
    setDeleteMode((prevMode) => !prevMode); // Toggle delete mode
  };

  const showItems = () => {
    console.log(items)
  }

  const deleteAllItems = () => {
    setItems([]); // Clear all items by setting an empty array
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Remove item by ID
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const changeFilteringOrder = (order) => {
    setItems((prevItems) => {
      const sortOrder = { ...prevSortOrder };

      if (!sortOrder[order] || sortOrder[order] === 'asc') {
        sortOrder[order] = 'desc'; // Set to descending order
      } else {
        sortOrder[order] = 'asc'; // Set to ascending order
      }

      const sortedItems = [...prevItems].sort((a, b) => {
        const titleA = a[order].replace(/[^A-Za-z0-9\s]/g, '').trim().toLowerCase();
        const titleB = b[order].replace(/[^A-Za-z0-9\s]/g, '').trim().toLowerCase();
        if (sortOrder[order] === 'asc') {
          return titleA < titleB ? -1 : 1;
        } else {
          return titleA > titleB ? -1 : 1;
        }
      });

      setSortOrder(sortOrder);
      return sortedItems;
    });
  };

  const addItem = (title, author, publication_date) => {
    const getFirstWord = (title) => {
      const words = title.split(' ');
      const commonWords = ['A', 'An', 'The', 'On'];
      for (const word of words) {
        if (!commonWords.includes(word)) {
          return word.replace(/\W/g, ''); // Remove non-word characters
        }
      }
      return ''; // Return an empty string if no valid word is found
    };

    const getLastName = (author) => {
      const names = author.split(',');
      const lastName = names.length > 1 ? names[0] : names[0].split(' ').pop();
      return lastName.trim();
    };

    const getUniqueKey = (key, index) => {
      const newKey = index > 0 ? `${index}${key}` : key;
      return items.some(item => item.id === newKey)
        ? getUniqueKey(key, index + 1)
        : newKey;
    };

    const formattedTitle = getFirstWord(title);
    const formattedAuthor = getLastName(author);
    const formattedDate = publication_date.replace(/\D/g, ''); // Extract only digits for date
    const key = `${formattedAuthor.toLowerCase()}${formattedTitle}${formattedDate}`;
    
    setItems((prevItems) => {
      let newKey = key;
      let counter = 2;
      prevItems.forEach((i) => {
        if (newKey === i.id) {
          newKey = `${key}-${counter}`;
          counter++
        }
      })
      return [
        ...prevItems,
        {
          title: title,
          author: author,
          publication_date: publication_date,
          id: newKey
        },
      ];
    });
  };

  const handleFileSelect = (file) => {
    const reader = new FileReader()

    reader.onload = (event) => {
      const content = event.target.result
      const jsonContent = bib2json(content)
      jsonContent.entries.forEach((entry) => {
        const { title, author, date } = entry.Fields || {};
        if (title && author && date) {
          addItem(title, author, date)
        }
      });
    };

    reader.readAsText(file)

    console.log('File name:', file.name)
  }
    {/* <section>
    <Add addItem={addItem}/>
    <form>
      <FileUpload onFileSelect={handleFileSelect}/>
    </form>
    <button onClick={toggleDeleteMode}>
      {deleteMode ? 'EXIT DELETE MODE' : 'DELETE MODE'}
    </button>
    <button onClick={deleteAllItems}>
      DELETE ALL
    </button>
    <button onClick={showItems}>
      SHOW
    </button>
    </section> */}
  return (
    <article class="entries-table">

    <table>
      <colgroup>
        <col className="title"/>
        <col className="author"/>
        <col className="date"/>
      </colgroup>
      <thead>
        <tr>
          <th scope="col" onClick={() => changeFilteringOrder("title")}>
              Title
          </th>
          <th scope="col" onClick={() => changeFilteringOrder("author")}>
              Author
          </th>
          <th scope="col" onClick={() => changeFilteringOrder("publication_date")}>
              Date
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Item key={item.id} data={item} deleteMode={deleteMode} onDelete={deleteItem} />
        ))}
      </tbody>
    </table>
    </article>
  )

}

export default Shelf