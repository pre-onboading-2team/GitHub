import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../../components/Spinner";
import CommentListItem from "./CommentListItem";
import ErrorPage from "./ErrorPage";
import * as S from "./styles";

const Detail = () => {
  const { number } = useParams();
  const [mainData, setMainData] = useState({});
  const [commentsData, setCommentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const mainRespones = axios.get(
      `https://api.github.com/repos/angular/angular-cli/issues/${number}`,
      {
        headers: {
          Authorization: "token" + process.env.REACT_APP_API_KEY,
        },
      }
    );
    const commentResponse = axios.get(
      `https://api.github.com/repos/angular/angular-cli/issues/${number}/comments`,
      {
        headers: {
          Authorization: "token" + process.env.REACT_APP_API_KEY,
        },
      }
    );
    Promise.all([mainRespones, commentResponse]) //
      .then(([main, comment]) => {
        setMainData(main.data);
        setCommentsData(comment.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  if (isError) {
    return <ErrorPage />;
  }
  return (
    <S.PageContainer>
      {isLoading ? (
        <Spinner className="spinner" />
      ) : (
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

          <S.List>
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
          </S.List>
        </>
      )}
    </S.PageContainer>
  );
};

export default Detail;
