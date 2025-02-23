import { useState } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen"
})<{ isOpen: boolean }>`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 118px 30px 1fr 112px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 325px;
  border-radius: 18px;
  background-color: var(--secondary-bg-color);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease;
  z-index: 1000;
  padding: 0;

  @media (min-width: 768px) {
    transform: translateX(0);
    position: static;
    height: calc(100% - 32px);
    box-shadow: var(--sidebar-shadow);
  }
`;

export const SidebarContent = styled.div`
  position: relative;
  padding: 0px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  display: block;
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: var(--main-color);
  border: none;
  color: white;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1100;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px 0px 20px;
  border-bottom: 1px solid var(--sidebar-border-color);
`;

export const SidebarFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 20px 20px 20px;
`;

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      {!isOpen && <ToggleButton onClick={toggleSidebar}>Меню</ToggleButton>}

      <SidebarContainer isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>×</CloseButton>
        {children}
      </SidebarContainer>
    </>
  );
};
