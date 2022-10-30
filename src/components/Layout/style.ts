import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LayoutMainBlock = styled.div`
  width: 90%;
  margin: 0 auto;
  /* padding: 0 auto; */
  margin-bottom: auto;

  @media screen and (max-width: 390px) {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }
`;
