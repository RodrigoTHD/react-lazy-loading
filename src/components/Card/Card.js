import React from "react";
import styled from "styled-components";

const Card = props => {
  // root element
  const StyledCard = styled.div`
    border-radius: 2px;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    padding: ${props.padding}px;
    width: ${props.width ? props.width + "px" : "auto"};
    margin: ${props.margin}px;
  `;

  return <StyledCard>{props.children}</StyledCard>;
};

export default Card;
