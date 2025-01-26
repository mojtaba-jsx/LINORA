import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  let route = useRoutes(routes);
  return <div>{route}</div>;
}

export default App;
