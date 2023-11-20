import React from 'react';

const FileUpload = ({ onFileSelect }) => {
  const handleFileInput = (e) => {
    onFileSelect(e.target.files[0]);
  };

  return (
    <input
      type="file"
      accept=".bib"
      onChange={handleFileInput}
    />
  );
};

export default FileUpload;
