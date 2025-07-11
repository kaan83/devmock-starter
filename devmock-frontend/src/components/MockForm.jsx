import React, { useState } from "react";

export default function MockForm() {
  const [text, setText] = useState('');

  return (
    <div>
      <h2 className="text-lg mb-2">MockForm works!</h2>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type something"
        className="border p-2"
      />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
}
