import { useState } from "react";

import styled from "styled-components";

import { Typography } from "./typography";

const SelectContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
`;

const SelectedOption = styled.div`
  font-size: 16px;
  color: var(--text-color);
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 5px;
  border: 1px solid var(--outlined-border-color);
  background-color: var(--secondary-bg-color);
  border-radius: 8px;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
`;

const DropdownItem = styled.div`
  padding: 5px;
  border-radius: 6px;
  background-color: var(--secondary-bg-color);
  color: var(--text-color);

  &:hover {
    background-color: var(--outlined-border-color);
  }
`;

interface ISelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const Select: React.FC<ISelectProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectedOption onClick={handleSelectClick}>
        <img src='/net.svg' alt='network_icon' />
        {value}
      </SelectedOption>

      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
              <Typography kind='body-s-medium'>{option}</Typography>
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </SelectContainer>
  );
};
