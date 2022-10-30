import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./components";
import { IssueDetail, IssueList, NotFound } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<IssueList />} />
        <Route path="/:id" element={<IssueDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
