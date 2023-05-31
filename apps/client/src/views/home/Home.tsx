const Home = () => {
  return (
    <div style={{}}>
      <h1>Home</h1>
      <button
        onClick={async () => {
          const response = await fetch("/api/v1/test");
          const data = await response.json();
          if (data) window.alert(JSON.stringify(data, null, 2));
        }}
      >
        fetch api
      </button>
    </div>
  );
};

export default Home;
