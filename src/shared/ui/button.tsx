import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { match } from "../lib";
import { Spinner } from "./spinner";
import { Typography } from "./typography";

export const TButtonSizes = ["default", "icon", "small-icon"] as const;

export const UnstyledButton = styled.button`
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
`;

type TButtonSize = (typeof TButtonSizes)[number];

export const ButtonKinds = ["primary", "outlined", "destructive", "void", "ghost"] as const;

export type TButtonKind = (typeof ButtonKinds)[number];

interface IButtonContainerProps {
  size: TButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  kind: TButtonKind;
}

const ButtonContainer = styled(UnstyledButton).withConfig({
  shouldForwardProp: (prop) => !["isLoading"].includes(prop)
})<IButtonContainerProps>`
  position: relative;
  white-space: nowrap;
  border-radius: 8px;

  cursor: ${({ disabled, isLoading }) => (disabled ? "initial" : isLoading ? "wait" : "pointer")};

  ${({ disabled }) =>
    disabled &&
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
        height: 36px;
        width: 36px;

        & > * {
          position: absolute;
          top: 50%;
          padding-top: 6px;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `,
      "small-icon": () => css``
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
      destructive: () => css`
        background: transparent;
      `,
      void: () => css`
        transition: transform 0.3s ease-in-out;
        background: transparent;
        border: none;
      `,
      ghost: () => css`
        background: transparent;
        color: var(--main-color);
        transition: all 0.3s ease;
        border-radius: 8px;
      `
    })}

  ${({ disabled, isLoading, kind }) =>
    !disabled &&
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
          destructive: () => css`
            background: var(--destructive-hover-color);
          `,
          void: () => css`
            transform: scale(1.1);
          `,
          ghost: () => css`
            background: rgba(0, 0, 0, 0.05);
            border-color: var(--outlined-border-color);
          `
        })}
      }
    `};
`;

export interface IButtonProps {
  size?: TButtonSize;
  kind?: TButtonKind;
  children: React.ReactNode;
  disabled?: boolean | string;
  isLoading?: boolean;
  isRounded?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Hide = styled.div`
  opacity: 0;
`;

export const Button = ({
  children,
  size = "default",
  disabled = false,
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
    disabled: !!disabled,
    isLoading,
    onClick: disabled || isLoading ? undefined : onClick,
    ...rest
  };

  return <ButtonContainer {...containerProps}>{content}</ButtonContainer>;
};

export const StyledLinkButton = styled(ButtonContainer).attrs({ as: Link })``;
