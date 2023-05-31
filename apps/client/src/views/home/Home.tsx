import { Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <div className="text-base">HOME</div>
      <Button
        variant="contained"
        onClick={async () => {
          const response = await fetch("/api/v1/test");
          const data = await response.json();
          if (data) window.alert(JSON.stringify(data, null, 2));
        }}
      >
        fetch api
      </Button>
    </div>
  );
};

export default Home;
