import styled from "styled-components";

import { inputMdStyles } from "./typography";

export const Input = styled.input`
  background: var(--secondary-bg-color);
  border: 1px solid var(--outlined-border-color);
  padding: 16px;
  border-radius: 8px;
  height: 22px;
  color: var(--text-color);
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--outlined-border-color);
    box-shadow: var(--base-shadow);
  }

  ${inputMdStyles}

  &::placeholder {
    ${inputMdStyles}
    color: var(--placeholder-color);
  }
`;
