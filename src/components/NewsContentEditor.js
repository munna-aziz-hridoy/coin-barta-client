import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const NewsContentEditor = ({ previousContent, setContent }) => {
  const editorRef = useRef(null);

  return (
    <JoditEditor
      ref={editorRef}
      value={previousContent}
      onChange={(newContent) => setContent(newContent)}
    />
  );
};

export default NewsContentEditor;
