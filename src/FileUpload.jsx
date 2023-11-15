import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  return (
    <>
      <form>
        <label htmlFor="fileInput">Upload BibTex</label>
        <input type="file" id="fileInput" accept='.bib'/>
      </form>
    </>
  )
}

export default FileUpload