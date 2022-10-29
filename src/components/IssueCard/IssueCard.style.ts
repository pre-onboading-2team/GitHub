import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  padding: 0 10px;
  border-bottom: 1px solid black;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #d7d7d7;
  }
`;

export const LeftSide = styled.section`
  flex-basis: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  & > div > span {
    margin-right: 10px;
  }
`;

export const MainInfos = styled.div`
  font-size: 1.2rem;
  font-weight: bold;

  & > h3 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1.2rem;
  }
`;

export const SubInfos = styled.div`
  font-size: 1rem;
  color: #363535;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Comment = styled.div`
  margin-left: 10px;
  font-size: 1rem;
  color: #363535;
`;
