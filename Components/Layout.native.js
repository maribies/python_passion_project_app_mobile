import React from "react";
import styled from "@emotion/native";
import { StatusBar } from "expo-status-bar";

const LayoutWrapper = styled.View`
  margin-top: ${props => props.theme.marginTop};
  width: 68%;
  height: 100%;
  margin-left: 67px;
  margin-right: 67px;
`;

const StatusBarWrapper = styled.View`
  margin-top: ${props => props.theme.marginTop};
`;

export const Layout = props => {
  return (
    <LayoutWrapper>
      <StatusBarWrapper>
        <StatusBar style="auto" />  
      </StatusBarWrapper>
      {props.children}
    </LayoutWrapper>
  )
}
