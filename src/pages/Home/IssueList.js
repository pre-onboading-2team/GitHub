import IssueListItem from "./IssueListItem";

const IssueList = () => {
  //작성자
  //작성일
  //이슈번호
  //코멘트숫자
  //제목

  return (
    <ul>
      <IssueListItem
        title={"이거해주세요"}
        name={"성호"}
        data={"2021-11-11"}
        number={111}
        comments={33}
      />
      <IssueListItem
        title={"이거해주세요"}
        name={"성호"}
        data={"2021-11-11"}
        number={111}
        comments={33}
      />
      <IssueListItem
        title={"이거해주세요"}
        name={"성호"}
        data={"2021-11-11"}
        number={111}
        comments={33}
      />
    </ul>
  );
};

export default IssueList;
