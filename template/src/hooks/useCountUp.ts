import { useState } from "react";

export const useCountUp = (increase: number) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + increase);
  return { count, increment };
};
