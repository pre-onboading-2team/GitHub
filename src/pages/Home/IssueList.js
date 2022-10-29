import axios from "axios";
import { useEffect, useState } from "react";

import useIssueContext from "../../hooks/useIssueContext";
import IssueListItem from "./IssueListItem";

const IssueList = () => {
  const { issueData, setIssueData } = useIssueContext();
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=10&page=${pageNumber}`
      );

      const newDataArr = res.data.map((obj) => ({
        date: obj.created_at.split("T")[0],
        title: obj.title,
        user: obj.user.login,
        number: obj.number,
        comments: obj.comments,
        id: obj.id,
      }));

      setIssueData((prev) => [...prev, ...newDataArr]);
    };
    getData();
  }, [pageNumber]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    console.log("scrollY: ", window.scrollY);
    console.log("innerHeight: ", window.innerHeight);
    console.log("offsetHeight: ", document.body.offsetHeight);

    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      setPageNumber((num) => num + 1);
    }
  };

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
