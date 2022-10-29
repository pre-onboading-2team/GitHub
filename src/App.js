import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Home } from "./pages";
import { Detail } from "./pages/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:number" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
