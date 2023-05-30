const App = () => {
  return (
    <div>
      <button
        onClick={async () => {
          const response = await fetch("/api/v1/carlos");
          const data = await response.json();
          console.log(data);
          console.log(import.meta.env.DEV);
        }}
      >
        Hola
      </button>
    </div>
  );
};

export default App;
