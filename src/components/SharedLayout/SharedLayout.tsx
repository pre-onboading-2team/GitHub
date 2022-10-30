import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  & > h1 {
    font-size: 1.4rem;
    margin: 30px 0;
  }

  & > section {
    max-width: 1160px;
    width: 100%;
  }
`;

const SharedLayout = () => {
  return (
    <Container>
      <h1>Angular / Angular-cli</h1>
      <section>
        <Outlet />
      </section>
    </Container>
  );
};

export default SharedLayout;
