import styled, { css } from "styled-components";

const centerStyles = css`
  justify-content: center;
`;

interface IContainerProps {
  centered?: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  display: flex;
  gap: 16px;
  align-items: center;

  ${({ centered }) => centered && centerStyles}

  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;
