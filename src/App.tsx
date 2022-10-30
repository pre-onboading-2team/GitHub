import React from "react";
import { Route, Routes } from "react-router";

import { Layout } from "./components";
import { Issue, Issues, NotFound } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Issues />} />
        <Route path="/:number" element={<Issue />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
