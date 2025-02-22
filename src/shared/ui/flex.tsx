import styled from "styled-components";

interface IFlexProps {
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
  justifyContent?: "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
}

export const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  align-items: ${({ alignItems = "start" }) => alignItems};
  justify-content: ${({ justifyContent = "start" }) => justifyContent};
  flex-wrap: ${({ flexWrap = "nowrap" }) => flexWrap};
  gap: ${({ gap = "0px" }) => gap};
`;
