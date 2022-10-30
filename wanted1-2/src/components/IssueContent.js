import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getIssuesDetail } from '../apis/api';
import DetailLoading from './loading/DetailLoading';
import IssueItem from './IssueItem';

const IssueContent = () => {
  const [issueList, setIssueList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getIssuesDetail.then((res) => {
      setIssueList(res.data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <div>
            <img src={issueList?.user?.avatar_url} alt="avatar" />
            <IssueItem issueList={issueList} />
          </div>
        ) : (
          <div>
            <IssueItem />
          </div>
        )}
      </div>
      {isLoading ? <div>{issueList?.body}</div> : <DetailLoading />}
    </>
  );
};

export default IssueContent;
