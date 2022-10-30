/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components";

export const Container = styled.aside`
  margin: 20px auto;

  & > a {
    display: block;
    width: 150px;
    height: 50px;
    background-image: url("https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Advertisement = () => {
  return (
    <Container>
      <a target="_blank" href="https://www.wanted.co.kr/" rel="noreferrer" />
    </Container>
  );
};

export default Advertisement;
