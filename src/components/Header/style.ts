import styled from "styled-components";

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;

  border-bottom: 1px solid gray;

  margin-bottom: 1.8rem;

  @media screen and (max-width: 390px) {
    flex-direction: column;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 1.2rem;
  line-height: 1.5rem;
  padding: 0 1rem;
`;
