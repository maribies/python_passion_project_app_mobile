import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "@emotion/native";

const Text = styled.Text`
  margin-bottom: ${(props) => props.theme.margin};
  font-size: ${(props) => props.theme.fonts.default};
  font-family: serif;
  font-weight: ${(props) => props.theme.fonts.weight};
`;

const BaseText = styled(Text)`
  font-family: FanwoodText_400Regular;
`;

const H1Text = styled(BaseText)`
  font-size: ${(props) => props.theme.fonts.xLarge};
  font-family: Quattrocento_700Bold;
  font-weight: 700;
`;

const H2Text = styled(BaseText)`
  font-size: ${(props) => props.theme.fonts.large};
  font-family: Quattrocento_400Regular;
`;

const H3Text = styled(BaseText)`
  font-size: ${(props) => props.theme.fonts.medium};
  font-family: Quattrocento_400Regular;
`;

const CaptionText = styled(BaseText)`
  font-size: ${(props) => props.theme.fonts.small};
  font-family: FanwoodText_400Regular_Italic;
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
