import React from "react";
import MDEditor, { commands } from "@uiw/react-md-editor"; // Import MDEditor

const Editor = ({ value, setValue }) => {
  return (
    <div className="flex-grow flex">
      <div className="w-full p-4 bg-white border-gray-300" style={{ height: '100%', minHeight: '400px' }}>
        <MDEditor
          value={value}
          onChange={(val) => setValue(val || "")}
          commands={[
            commands.bold,
            commands.italic,
            commands.link,
            commands.strikethrough,
            commands.title,
            // Add more commands as needed
          ]}
          className="custom-md-editor h-full"  style={{ height: '100%', minHeight: '400px' }}
        />
      </div>
    </div>
  );
};

export default Editor;
