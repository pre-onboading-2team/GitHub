import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentListItem from "./CommentListItem";

const Detail = () => {
  //이슈번호, param
  //이슈제목 , data.title

  //작성자, data.user.login
  //작성일, data.created_at
  //코멘트 수 data.comments
  //작성자 프로필 이미지, res.data.user.avatar_url,
  //본문 res.data.body,
  const { number } = useParams();
  const [mainData, setMainData] = useState({});
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://api.github.com/repos/angular/angular-cli/issues/${number}`
      );
      setMainData(res.data);
      console.log(res.data);
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
      <h1>{mainData?.title}</h1>
      <div>#{number}</div>
      <div>{mainData?.comments}</div>
      {/*  */}
      <div>{commentsData[0]?.body}</div>

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
