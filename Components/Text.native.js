/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "@emotion/native";

const Text = styled.Text`
  marginBottom: ${(props) => props.theme.margin};
  fontSize: ${(props) => props.theme.fontDefaultSize};
  fontFamily: serif;
  fontWeight: ${(props) => props.theme.fontDefaultWeight};
`;

const BaseText = styled(Text)`
  fontFamily: FanwoodText_400Regular;
`;

const H1Text = styled(BaseText)`
  fontSize: ${(props) => props.theme.fontXLarge};
  fontFamily: Quattrocento_700Bold;
  fontWeight: 700;
`;

const H2Text = styled(BaseText)`
  fontSize: ${(props) => props.theme.fontLarge};
  fontFamily: Quattrocento_400Regular;
`;

const H3Text = styled(BaseText)`
  fontSize: ${(props) => props.theme.fontMedium};
  fontFamily: Quattrocento_400Regular;
`;

const CaptionText = styled(BaseText)`
  fontSize: ${(props) => props.theme.fontSmall};
  fontFamily: FanwoodText_400Regular_Italic;
`;

export const MainText = ({ style, children }) => {
  return (
    <BaseText
      style={css`
        ${style}
      `}
    >
      {children}
    </BaseText>
  );
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
