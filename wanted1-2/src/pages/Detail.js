import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { getIssuesDetail } from '../apis/api';
import IssueContent from '../components/IssueContent';

/* eslint-disable react/jsx-no-useless-fragment */
const Detail = () => {
  const [issues, setIssues] = useState();
  const params = useParams;
  const fetchData = async () => {
    await getIssuesDetail(params.id).then(({ data }) => {
      setIssues(data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    issues && (
      <DetailContainer>
        <IssueContent />
      </DetailContainer>
    )
  );
};

export default Detail;
const DetailContainer = styled.div`
  width: 100%;
`;
