import { useState } from "react";
import { createContext } from "react";

const IssueContext = createContext([]);

const IssueCtxProvider = ({ children }) => {
  const [issueData, setIssueData] = useState([]);

  return (
    <IssueContext.Provider value={{ issueData, setIssueData }}>
      {children}
    </IssueContext.Provider>
  );
};

export { IssueContext, IssueCtxProvider };
