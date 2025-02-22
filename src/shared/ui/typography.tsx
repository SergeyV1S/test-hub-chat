import styled, { css } from "styled-components";

import { match } from "../lib";

export const TTypographyKinds = [
  "input-md",
  "body-xl-semibold",
  "body-m-medium",
  "body-s-medium",
  "body-m-semibold",
  "button-md",
  "input-validate"
] as const;

export type TTypographyKind = (typeof TTypographyKinds)[number];

interface ITypographyProps {
  kind: TTypographyKind;
}

export const inputMdStyles = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

export const Typography = styled.p<ITypographyProps>`
  color: white;
  font-family: inherit;

  ${({ kind }) =>
    match(kind, {
      "input-md": () => css`
        ${inputMdStyles}
        display: flex;
        flex-direction: column;
        gap: 8px;
      `,
      "body-xl-semibold": () => css`
        font-weight: 600;
        font-size: 22px;
        line-height: 29px;
      `,
      "button-md": () => css`
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
      `,
      "input-validate": () => css`
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: var(--destructive-color);
      `,
      "body-m-medium": () => css`
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
      `,
      "body-s-medium": () => css`
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
      `,
      "body-m-semibold": () => css`
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
      `
    })}
`;
