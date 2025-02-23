import styled from "styled-components";

import { LoadingIcon } from "@/shared/icons";

interface ISpinnerProps {
  children?: React.ReactNode;
  size?: number;
}

export const SpinnerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Spinner = ({ children, size }: ISpinnerProps) => (
  <SpinnerContainer>
    <div className=''>
      <LoadingIcon size={size} />
      {children && <p>{children}</p>}
    </div>
  </SpinnerContainer>
);
