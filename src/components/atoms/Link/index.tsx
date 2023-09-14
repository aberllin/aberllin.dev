import styled, { css } from "styled-components";
import { LinkProps, Link as RouterLink } from "react-router-dom";

type Props = LinkProps & {
  selected?: boolean;
};

const Link: React.FC<Props> = ({ selected, ...rest }) => (
  <StyledLink $selected={selected} {...rest} />
);

const StyledLink = styled(RouterLink)<{ $selected?: boolean }>(
  ({ $selected }) => css`
    padding: 0 20px 0 0;
    transition: all 0.2s ease-in-out;
    position: relative;
    color: ${$selected ? "#1ccbb1" : "white"};
    text-decoration: none;

    &:hover {
      color: #1ccbb1;
    }
  `
);

export default Link;
