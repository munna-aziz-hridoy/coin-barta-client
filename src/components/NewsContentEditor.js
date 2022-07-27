import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const NewsContentEditor = ({ setContent }) => {
  const editorRef = useRef(null);

  return (
    <JoditEditor ref={editorRef} onChange={(content) => setContent(content)} />
  );
};

export default NewsContentEditor;
