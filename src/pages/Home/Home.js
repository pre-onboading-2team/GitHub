import { IssueCtxProvider } from "../../context/IssueContext";
import IssueList from "./IssueList";

const Home = () => {
  return (
    <IssueCtxProvider>
      <IssueList />
    </IssueCtxProvider>
  );
};

export default Home;
