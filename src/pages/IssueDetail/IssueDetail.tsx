import { useParams } from "react-router-dom";

const IssueDetail = () => {
  const params = useParams();
  console.log(params.id);
  return <div>IssueDetail</div>;
};

export default IssueDetail;
