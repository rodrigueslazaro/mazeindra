import React, { useState } from "react";

const Add = ({ addItem }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publication_date, setPublicationDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(title, author, publication_date);
    setTitle("");
    setAuthor("")
    setPublicationDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="list-form">
      <label htmlFor="title">Title:</label>
      <input
        name="title"
        type="title"
        placeholder="Book/article title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="author">Author:</label>
      <input
        name="author"
        type="author"
        placeholder="Book/article title"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="publication_date">Date:</label>
      <input
        name="publication_date"
        type="publication_date"
        placeholder="Book/article title"
        value={publication_date}
        onChange={(e) => setPublicationDate(e.target.value)}
      />
      <button type="submit">📝</button>
    </form>
  );
};

export default Add;