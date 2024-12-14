import { useCountUp } from "./hooks";

const App = () => {
  const { count, increment } = useCountUp(2);

  return <button onClick={increment}>count is {count}</button>;
};

export default App;
