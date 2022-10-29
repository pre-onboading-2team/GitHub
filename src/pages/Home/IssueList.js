import axios from "axios";
import { useEffect, useState } from "react";

import Spinner from "../../components/Spinner";
import useIssueContext from "../../hooks/useIssueContext";
import ErrorPage from "./ErrorPage";
import IssueListItem from "./IssueListItem";
import * as S from "./styles";

const IssueList = () => {
  const { issueData, setIssueData } = useIssueContext();
  const [pageNumber, setPageNumber] = useState(1);
  const [isError, setIsError] = useState(false);
  const [isInitialLoading, setisInitialLoading] = useState(true);
  const [isAdditionalLoading, setIsAdditionalLoading] = useState(false);

  const getData = async () => {
    if (pageNumber !== 1) {
      setIsAdditionalLoading(true);
    }
    try {
      const res = await axios.get(
        `https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=8&page=${pageNumber}`
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
      setisInitialLoading(false);
      setIsAdditionalLoading(false);
    } catch (err) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getData();
  }, [pageNumber]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      setPageNumber((num) => num + 1);
    }
  };

  if (isError) {
    return <ErrorPage />;
  }
  return (
    <S.List>
      {isInitialLoading ? (
        <Spinner className="spinner-main" />
      ) : (
        <>
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
        </>
      )}
      {isAdditionalLoading ? <Spinner className="spinner-sub" /> : null}
    </S.List>
  );
};

export default IssueList;
