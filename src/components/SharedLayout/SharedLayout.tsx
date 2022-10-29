import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  border: 1px solid red;

  & > section {
    width: 100%;
    max-width: 1300px;
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
