import axios from "axios";
import { useEffect } from "react";

import useIssueContext from "../../hooks/useIssueContext";
import IssueListItem from "./IssueListItem";

const IssueList = () => {
  const { issueData, setIssueData } = useIssueContext();
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=15&page=1"
      );
      const newDataArr = res.data.map((obj) => ({
        date: obj.created_at,
        title: obj.title,
        user: obj.user.login,
        number: obj.number,
        comments: obj.comments,
        id: obj.id,
      }));

      setIssueData((prev) => [...prev, ...newDataArr]);
      // setIssueData(newDataArr);
    };
    getData();

    return () => {
      setIssueData([]);
    };
  }, []);

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  console.log(issueData);
  return (
    <ul>
      {issueData.map((issue) => (
        <IssueListItem
          key={issue.id}
          title={issue.title}
          user={issue.user}
          date={issue.date}
          number={issue.number}
          comments={issue.comments}
        />
      ))}
    </ul>
  );
};

export default IssueList;
