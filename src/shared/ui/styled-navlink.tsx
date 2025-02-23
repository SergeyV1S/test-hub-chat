import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &.active {
    background-color: var(--main-color);
  }

  &:hover {
    background-color: var(--bg-card-color);
  }
`;
