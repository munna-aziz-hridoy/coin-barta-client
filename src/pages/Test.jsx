import React, { useState } from "react";

const Test = () => {
  const [fileState, setFileState] = useState("");
  //   const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState();
  const handleFile = (e) => {
    const file = e.target.files[0];

    handlePreviewFile(file);
  };
  const handlePreviewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    uploadFile(preview);
  };

  const uploadFile = async (base64EncodedUrl) => {
    if (!preview) return;
    console.log(base64EncodedUrl);
    try {
      await fetch("http://localhost:5000/testUpload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedUrl }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>upload image</h1>
      <form onSubmit={handleFileSubmit}>
        <input onChange={handleFile} type="file" multiple />
        <input type="submit" value="submit" />
      </form>
      {preview && <img src={preview} alt="test" />}
    </div>
  );
};

export default Test;
