import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  border: 1px solid black;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #d7d7d7;
  }
`;

export const LeftSide = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div > span {
    margin-right: 10px;
  }
`;

export const MainInfos = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;

  & > h3 {
    font-size: 1.2rem;
  }
`;

export const SubInfos = styled.div`
  font-size: 1rem;
  color: #363535;
`;

export const Comment = styled.div`
  font-size: 1rem;
  color: #363535;
`;
