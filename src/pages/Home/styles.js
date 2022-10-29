import styled from "styled-components";

export const Balloon = styled.div`
  background-color: #c6c6c6;
  position: relative;
  min-width: 30px;
  display: flex;
  justify-content: center;
  font-size: 15px;
  border-radius: 5px;
  ::before {
    content: "";
    top: 90%;
    left: 10%;
    position: absolute;
    border-top: 10px solid #c6c6c6;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
`;

export const List = styled.ul`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .spinner-main {
    align-self: center;
    font-size: 40px;
    position: absolute;
    top: 50%;
  }
  .spinner-sub {
    align-self: center;
    font-size: 40px;
    margin-top: 10px;
  }
`;

export const ListItem = styled.li`
  background-color: white;
  border-radius: 10px;
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
    > * {
      margin-right: 5px;
    }
  }
  .comments {
    align-self: center;
    /* svg {
      font-size: 40px;
    }
    background-color: #00000013;  */
  }
`;
