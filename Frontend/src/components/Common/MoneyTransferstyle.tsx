import React from "react";
import styled from "styled-components";

interface HoverButtonProps {
  name: string;
  firstLatter:string
}

export const HoverButton: React.FC<HoverButtonProps> = ({ name , firstLatter }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="tooltip">{name}</div>
        <div className="circle">{firstLatter}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  .circle {
    width: 55px;
    height: 55px;
    background: #22c55e; 
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  .tooltip {
    position: absolute;
    bottom: 70px;
    background: #ffffff; 
    color: #22c55e; 
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.25s ease;
    pointer-events: none;
    white-space: nowrap;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  .tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    width: 10px;
    height: 10px;
    background: #ffffff;
    transform: translateX(-50%) rotate(45deg);
  }

  .container:hover .tooltip {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default HoverButton;
