import React from "react";

function Message({ text, children }) {
  return (
    <p>
      {text} {children}
    </p>
  );
}

export default Message;
