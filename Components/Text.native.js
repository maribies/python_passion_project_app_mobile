import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "@emotion/native";
import {
  useFonts,
  Quattrocento_400Regular,
  Quattrocento_700Bold,
} from "@expo-google-fonts/quattrocento";
import {
  FanwoodText_400Regular,
  FanwoodText_400Regular_Italic,
} from "@expo-google-fonts/fanwood-text";
import { AppLoading } from "expo";

const Text = styled.Text`
  marginBottom: ${(props) => props.theme.margin};
  fontSize: ${(props) => props.theme.default};
  fontFamily: serif;
  fontWeight: ${(props) => props.theme.weight};
  lineHeight: ${(props) => props.theme.lineHeight};
`;

const BaseText = styled(Text)`
  fontFamily: FanwoodText_400Regular;
`;

const H1Text = styled(BaseText)`
  fontSize: ${(props) => props.theme.xlarge};
  fontFamily: Quattrocento_700Bold;
  fontWeight: 700;
`;

const H2Text = styled(BaseText)`
  fontSize: ${(props) => props.theme.large};
  fontFamily: Quattrocento_400Regular;
`;

const H3Text = styled(BaseText)`
  fontSize: ${(props) => props.theme.medium};
  fontFamily: Quattrocento_400Regular;
`;

const CaptionText = styled(BaseText)`
  fontSize: ${(props) => props.theme.small};
  fontFamily: FanwoodText_400Regular_Italic;
`;

export const MainText = ({ style, children }) => {
  let [fontsLoaded] = useFonts({
    Quattrocento_400Regular,
    Quattrocento_700Bold,
    FanwoodText_400Regular,
    FanwoodText_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <BaseText
        style={css`
          ${style}
        `}
      >
        {children}
      </BaseText>
    );
  }
};

export const H1 = ({ style, children }) => {
  return (
    <H1Text
      style={css`
        ${style};
      `}
    >
      {children}
    </H1Text>
  );
};

export const H2 = ({ style, children }) => {
  return (
    <H2Text
      style={css`
        ${style};
      `}
    >
      {children}
    </H2Text>
  );
};

export const H3 = ({ style, children }) => {
  return (
    <H3Text
      style={css`
        ${style};
      `}
    >
      {children}
    </H3Text>
  );
};

export const Caption = ({ style, children }) => {
  return (
    <CaptionText
      style={css`
        ${style};
      `}
    >
      {children}
    </CaptionText>
  );
};

MainText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  style: PropTypes.object,
};

H1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  style: PropTypes.object,
};

H2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  style: PropTypes.object,
};

H3.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  style: PropTypes.object,
};

Caption.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  style: PropTypes.object,
};
