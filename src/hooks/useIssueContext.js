import { useContext } from "react";

import { IssueContext } from "../context/IssueContext";

const useIssueContext = () => useContext(IssueContext);

export default useIssueContext;
