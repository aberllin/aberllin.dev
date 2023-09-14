import styled, { css } from "styled-components";

const Typography = () => {};

export const Body = styled.div<{ size?: string }>(
  ({ size = "18px" }) => css`
    font-size: ${size};
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
  `
);

export default Typography;
