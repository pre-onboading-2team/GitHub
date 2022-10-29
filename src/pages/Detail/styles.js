import styled from "styled-components";

export const Header = styled.header`
  /* display: flex; */
  .meta {
    display: flex;
    > :first-child {
      margin-right: 10px;
    }
  }
`;

export const CommentListItem = styled.li`
  background-color: white;
  border-radius: 10px;
  margin-bottom: 50px;
  .comment-header {
    background-color: #c6c6c6;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    padding: 10px 20px;
    display: flex;
    > * {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
    img {
      width: 50px;
      border-radius: 50%;
    }
  }
  .comment-body {
    /* margin: 10px; */
    padding: 20px;
  }
`;
