import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: blue;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 16px;
  border-radius: 8px;
`;