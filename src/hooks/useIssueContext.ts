import {useContext} from "react";
import {IssueContext} from "../contexts/IssueContext";

const useIssueContext = () => useContext(IssueContext);

export default useIssueContext;
