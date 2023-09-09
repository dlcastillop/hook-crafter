import { useCountUp } from "./hooks";

function App() {
  const { count, increment } = useCountUp(2);

  return (
    <>
      <h1>Hook Crafter</h1>
      <button onClick={increment}>count is {count}</button>
      <p>
        Read the{" "}
        <a
          href="https://github.com/dlcastillop/hook-crafter/blob/main/README.md"
          target="_blank"
        >
          <code>README.md</code>
        </a>{" "}
        file to learn more
      </p>
    </>
  );
}

export default App;
