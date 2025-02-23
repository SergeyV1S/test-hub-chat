import styled, { css } from "styled-components";

import { match } from "../lib";

export const TTypographyKinds = [
  "input-md",
  "body-xs-regular",
  "body-s-medium",
  "body-m-medium",
  "body-m-semibold",
  "body-m-regular",
  "body-l-regular",
  "body-xl-semibold",
  "button-md",
  "input-validate"
] as const;

export type TTypographyKind = (typeof TTypographyKinds)[number];

interface ITypographyProps {
  kind: TTypographyKind;
  truncate?: boolean;
}

export const inputMdStyles = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

const truncateStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Typography = styled.p.withConfig({
  shouldForwardProp: (prop) => !["truncate"].includes(prop)
})<ITypographyProps>`
  color: white;
  font-family: "IBM Plex Sans", sans-serif;

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
      `,
      "body-l-regular": () => css`
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
      `,
      "body-m-regular": () => css`
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
      `,
      "body-xs-regular": () => css`
        font-weight: 400;
        font-size: 12px;
        line-height: 11px;
        text-align: end;
      `
    })}

  ${({ truncate }) => truncate && truncateStyles}
`;
