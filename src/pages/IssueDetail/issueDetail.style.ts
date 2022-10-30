import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 20px;

  & > main {
    margin: 20px 0;
  }
`;

export const IssueInfos = styled.section`
  display: flex;
  gap: 1.5rem;
`;

export const ImgContainer = styled.div`
  width: 100px;
  height: 6rem;

  & > img {
    width: 100px;
    height: 6rem;
    object-fit: cover;
  }
`;

export const Main = styled.main`
  line-height: 20px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
