import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useClickOutside } from "../hooks";
import { Typography } from "./typography";

const MAX_DROPDOWN_HEIGHT = 200;

const SelectContainer = styled.div<{ width?: string }>`
  position: relative;
  width: ${({ width }) => width || "fit-content"};
  cursor: pointer;
  margin-right: 10px;
  font-family: "IBM Plex Sans", sans-serif;
`;

const SelectedOption = styled.div`
  font-size: 16px;
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  border: 1px solid var(--outlined-border-color);
  border-radius: 8px;
  padding: 10px;
`;

const DropdownList = styled.div<{ $dropUp: boolean; $isOpen: boolean }>`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 5px;
  border: 1px solid var(--outlined-border-color);
  background-color: var(--secondary-bg-color);
  border-radius: 8px;
  z-index: 10;
  overflow-y: auto;
  heigth: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: ${({ $dropUp }) => ($dropUp ? "0" : "4px")};
  margin-bottom: ${({ $dropUp }) => ($dropUp ? "4px" : "0")};

  ${({ $dropUp }) => ($dropUp ? "bottom: 100%;" : "top: 100%;")}

  max-height: ${({ $isOpen }) => ($isOpen ? `${MAX_DROPDOWN_HEIGHT}px` : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
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
  children?: React.ReactNode;
  width?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Select: React.FC<ISelectProps> = ({ options, value, width, children, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  useClickOutside(selectRef, () => setIsOpen(false));

  const handleSelectClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      setDropUp(spaceBelow < MAX_DROPDOWN_HEIGHT && spaceAbove > spaceBelow);
    }
  }, [isOpen]);

  return (
    <SelectContainer width={width} ref={selectRef}>
      <SelectedOption onClick={handleSelectClick}>
        {children && children}
        {value}
      </SelectedOption>

      {
        <DropdownList $dropUp={dropUp} $isOpen={isOpen}>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
              <Typography kind='body-s-medium'>{option}</Typography>
            </DropdownItem>
          ))}
        </DropdownList>
      }
    </SelectContainer>
  );
};
