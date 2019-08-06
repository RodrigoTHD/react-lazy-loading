import React from "react";
import styled from "styled-components";

const Container = props => {
  const StyledContainer = styled.div`
    padding: ${props.padding}px;
    margin: ${props.margin}px;
  `;
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
