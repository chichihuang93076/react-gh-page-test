import { useState } from "react";

function Day4() {
  // 宣告一個新的 state 變數，我們叫他「count」
  const [count, setCount] = useState(0);

  function handleAddCount() {
    setCount(count + 1);
  }

  function handleDelCount() {
    setCount(count - 1);
  }

  return (
    <div style={{ padding: "3rem" }}>
      <p>現在的數字是 {count}</p>
      <button onClick={handleAddCount}>加一</button>
      <button onClick={handleDelCount}>減一</button>
    </div>
  );
}

export default Day4;
