import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentListItem from "./CommentListItem";
import * as S from "./styles";

const Detail = () => {
  const { number } = useParams();
  const [mainData, setMainData] = useState({});
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://api.github.com/repos/angular/angular-cli/issues/${number}`
      );
      setMainData(res.data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://api.github.com/repos/angular/angular-cli/issues/${number}/comments`
      );
      setCommentsData(res.data);
    };
    getData();
  }, []);

  return (
    <>
      <S.Header>
        <h1>
          {mainData?.title} #{number}
        </h1>
        <div className="meta">
          <div>
            {mainData?.created_at?.split("T")[0]} opened by{" "}
            {mainData?.user?.login}.
          </div>
          <div>{mainData?.comments} comments</div>
        </div>
      </S.Header>

      <ul>
        <CommentListItem
          key={mainData?.id}
          user={mainData?.user?.login}
          avatar={mainData?.user?.avatar_url}
          date={mainData?.created_at?.split("T")[0]}
          body={mainData?.body}
        />
        {commentsData.map((obj) => (
          <CommentListItem
            key={obj.id}
            user={obj.user.login}
            avatar={obj.user.avatar_url}
            date={obj.created_at.split("T")[0]}
            body={obj.body}
          />
        ))}
      </ul>
    </>
  );
};

export default Detail;
