import { IssueCtxProvider } from "../../context/IssueContext";
import IssueList from "./IssueList";

const Home = () => {
  return (
    <div>
      Home
      <IssueCtxProvider>
        <IssueList />
      </IssueCtxProvider>
    </div>
  );
};

export default Home;
