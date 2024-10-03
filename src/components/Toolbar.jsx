import React from "react";

const Toolbar = ({ downloadFile, value }) => {
  return (
    <div className="toolbar p-4 bg-light-toolbar border-b border-gray-300 flex justify-center space-x-2">
      <button
        className="bg-blue-400 text-white px-4 py-2 rounded"
        onClick={() => downloadFile(value, "text/markdown")}
      >
        Download Markdown
      </button>
      <button
        className="bg-green-400 text-white px-4 py-2 rounded"
        onClick={() => downloadFile(MDEditor.markdown(value), "text/html")}
      >
        Download HTML
      </button>
    </div>
  );
};

export default Toolbar;
