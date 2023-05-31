import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error: any = useRouteError();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{error.status}</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
export default NotFound;
