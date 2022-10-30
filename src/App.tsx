import React from 'react';
import {BrowserRouter} from "react-router-dom";
import RootRouter from "./router/RootRouter";

// const MyContext

function App() {
  return (
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
  );
}

export default App;
