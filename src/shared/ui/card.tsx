import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 460px;
  background-color: var(--bg-card-color);
  border-radius: 8px;
  border: 1px solid var(--outlined-border-color);
  box-shadow: 0 0px 10px var(--message-bg-color);
`;

export const CardHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const CardContent = styled.div`
  padding: 0px 20px 20px 20px;
`;

export const CardFooter = styled.div`
  padding: 10px 20px;
  border-top: 1px solid #eaeaea;
  text-align: center;
`;

type TCardProps = React.ComponentProps<"div">;

export const Card = ({ children, ...props }: TCardProps) => (
  <CardWrapper {...props}>{children}</CardWrapper>
);
