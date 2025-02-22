import styled from "styled-components";

interface IGridProps {
  columns?: number | string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  justifyItems?: "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly";
  alignItems?: string;
}

export const Grid = styled.div<IGridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns || "1fr"};
  gap: ${({ gap }) => gap || "16px"};
  grid-row-gap: ${({ rowGap, gap }) => rowGap || gap || "16px"};
  grid-column-gap: ${({ columnGap, gap }) => columnGap || gap || "16px"};
  justify-items: ${({ justifyItems }) => justifyItems || "stretch"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
`;
