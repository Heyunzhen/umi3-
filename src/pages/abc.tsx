import React, { useState } from "react";

const MyComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Click the button {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default MyComponent;
