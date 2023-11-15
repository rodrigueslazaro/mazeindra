import { useState } from 'react'
import './Item.css'

function Item({ data }) {
  return (
    <tr>
      <th>{data.title}</th>
      <th>{data.author}</th>
      <th>{data.publication_date}</th>
    </tr>
  )

}

export default Item