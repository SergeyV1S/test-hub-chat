import styled, { css } from "styled-components";

import { match } from "../lib";
import { Spinner } from "./spinner";
import { Typography } from "./typography";

export const TButtonSizes = ["default", "icon"] as const;

export const UnstyledButton = styled.button`
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
`;

type TButtonSize = (typeof TButtonSizes)[number];

export const ButtonKinds = ["primary", "outlined", "descructive"] as const;

export type TButtonKind = (typeof ButtonKinds)[number];

interface IButtonContainerProps {
  size: TButtonSize;
  isDisabled?: boolean;
  isLoading?: boolean;
  kind: TButtonKind;
}

const ButtonContainer = styled(UnstyledButton)<IButtonContainerProps>`
  position: relative;
  white-space: nowrap;
  border-radius: 8px;

  cursor: ${({ isDisabled, isLoading }) =>
    isDisabled ? "initial" : isLoading ? "wait" : "pointer"};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.8;
    `};

  ${({ size }) =>
    match(size, {
      default: () => css`
        padding: 8px;
        width: 100%;
        height: 50px;
        font-size: 14px;
      `,
      icon: () => css`
        padding: 2px;
        height: 16px;
        width: 16px;
        font-size: 14px;
      `
    })}

  ${({ kind }) =>
    match(kind, {
      primary: () => css`
        background: var(--main-color);
      `,
      outlined: () => css`
        background: transparent;
        border: 1px solid var(--outlined-border-color);
      `,
      descructive: () => css`
        background: transparent;
      `
    })}

  ${({ isDisabled, isLoading, kind }) =>
    !isDisabled &&
    !isLoading &&
    css`
      &:hover {
        ${match(kind, {
          primary: () => css`
            background: var(--main-hover-color);
          `,
          outlined: () => css`
            background: var(--outlined-hover-color);
          `,
          descructive: () => css`
            background: var(--descructive-hover-color);
          `
        })}
      }
    `};
`;

export interface IButtonProps {
  size?: TButtonSize;
  kind?: TButtonKind;
  children: React.ReactNode;
  isDisabled?: boolean | string;
  isLoading?: boolean;
  isRounded?: boolean;
  onClick?: () => void;
}

const Hide = styled.div`
  opacity: 0;
`;

export const Button = ({
  children,
  size = "default",
  isDisabled = false,
  isLoading = false,
  onClick,
  kind = "primary",
  ...rest
}: IButtonProps) => {
  const content = isLoading ? (
    <>
      <Hide>
        <Typography kind='button-md' as='span'>
          {children}
        </Typography>
      </Hide>
      <div style={{ position: "relative" }}>
        <Spinner size={18} />
      </div>
    </>
  ) : (
    <Typography kind='button-md' as='span'>
      {children}
    </Typography>
  );

  const containerProps = {
    kind,
    size,
    isDisabled: !!isDisabled,
    isLoading,
    onClick: isDisabled || isLoading ? undefined : onClick,
    ...rest
  };

  return <ButtonContainer {...containerProps}>{content}</ButtonContainer>;
};
