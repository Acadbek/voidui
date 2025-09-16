import React from "react";

interface CodeSnippedProps {
  children: React.ReactNode;
}

const CodeSnipped: React.FC<CodeSnippedProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default CodeSnipped;
