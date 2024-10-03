import React, { useState } from "react";
import Toolbar from "./Toolbar"; // Import the Toolbar component
import Editor from "./Editor"; // Import the Editor component

const MarkdownEditor = () => {
  const [value, setValue] = useState("# Your custom markdown here");

  // Download file functionality
  const downloadFile = (content, type) => {
    const blob = new Blob([content], { type });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `file.${type === "text/markdown" ? "md" : "html"}`;
    link.click();
  };

  return (
    <div className="markdown-editor flex flex-col min-h-screen bg-light-theme">
      {/* Toolbar Section */}
      <Toolbar downloadFile={downloadFile} value={value} />
      
      {/* Editor Section */}
      <Editor value={value} setValue={setValue} />
    </div>
  );
};

export default MarkdownEditor;
