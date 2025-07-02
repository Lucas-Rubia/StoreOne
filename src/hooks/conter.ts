import { useState } from "react";

export function useConter() {
  const [count, setCount] = useState(1)

  function increment() {
    setCount((state) => Math.min(state + 1, 9));
  }

  function decrement(){
    setCount((state) => Math.max(state - 1, 1));
  }


  return {count, increment, decrement,setCount}
}