import styled from "styled-components";

export const ListItem = styled.li`
  border: solid 1px black;
  margin-top: 20px;
  min-height: 80px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .titleAndMeta {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .meta {
    display: flex;
  }
  .comments {
    align-self: center;
  }
`;
