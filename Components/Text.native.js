import React from "react";
import { css } from "@emotion/native";
import { Text } from "react-native";
import {
  useFonts,
  Quattrocento_400Regular,
  Quattrocento_700Bold,
} from "@expo-google-fonts/quattrocento";
import {
  FanwoodText_400Regular,
  FanwoodText_400Regular_Italic,
} from "@expo-google-fonts/fanwood-text";

const defaultSyles = css`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: normal;
  line-height: 21px;
`;

const primary = css`
  font-family: FanwoodText_400Regular;
`;

const primaryItalic = css`
  font-family: FanwoodText_400Italic;
  font-size: 12.5px;
`;

const secondary = css`
  font-family: Quattrocento_400Regular;
  font-size: 26px;
`;

const secondaryBold = css`
  font-family: Quattrocento_700Bold;
  font-size: 33px;
`;

export const MainText = ({ style, children }) => {
  let [fontsLoaded] = useFonts({
    Quattrocento_400Regular,
    Quattrocento_700Bold,
    FanwoodText_400Regular,
    FanwoodText_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return (
      <Text
        style={css`
          ${defaultSyles}
        `}
      >
        {children}
      </Text>
    );
  }

  return (
    <Text
      style={css`
        ${primary} ${style}
      `}
    >
      {children}
    </Text>
  );
};

export const H1 = (props) => {
  return (
    <MainText
      style={css`
        ${secondaryBold};
      `}
    >
      {props.children}
    </MainText>
  );
};

export const H2 = (props) => {
  return (
    <MainText
      style={css`
        ${secondary};
      `}
    >
      {props.children}
    </MainText>
  );
};

export const H3 = (props) => {
  return (
    <MainText
      style={css`
        ${secondary};
        font-size: 20px;
      `}
    >
      {props.children}
    </MainText>
  );
};

export const Caption = (props) => {
  return (
    <MainText
      style={css`
        ${primaryItalic};
      `}
    >
      {props.children}
    </MainText>
  );
};
