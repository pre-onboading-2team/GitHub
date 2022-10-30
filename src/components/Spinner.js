import { FaSpinner } from "react-icons/fa";
import styled from "styled-components";

const Spinner = styled(FaSpinner)`
  @keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  animation: rotating 2s linear infinite;
`;

export default Spinner;
