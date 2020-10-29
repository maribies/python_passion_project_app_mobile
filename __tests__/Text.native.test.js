import React from "react";
import { create } from "react-test-renderer";
import { ThemeProvider } from "emotion-theming";
import { H1, H2, H3, MainText, Caption } from "../Components/Text.native";
import { theme } from "../theme";

// This test is borderline unnecessary now that it is just rendering UI,
// But I'm keeping for now as it helped ensure that I passed the props correctly
// and extended the styles correctly using a new lib. So although it's not so
// helpful as a test going forward, it was helpful in the development and refactor
// of these elements.

test("correctly renders the text elements", () => {
  let text = create(
    <ThemeProvider theme={theme}>
      <MainText>Text of the main persuasion.</MainText>
    </ThemeProvider>
  );
  let title = create(
    <ThemeProvider theme={theme}>
      <H1>Title!</H1>
    </ThemeProvider>
  );
  let subtitle = create(
    <ThemeProvider theme={theme}>
      <H2>I am a subtitle.</H2>
    </ThemeProvider>
  );
  let heading = create(
    <ThemeProvider theme={theme}>
      <H3>Not quite a subtitle, but still more important than the rest.</H3>
    </ThemeProvider>
  );
  let caption = create(
    <ThemeProvider theme={theme}>
      <Caption>I am a Caption!</Caption>
    </ThemeProvider>
  );

  expect(text.toJSON()).toMatchSnapshot();
  expect(title.toJSON()).toMatchSnapshot();
  expect(subtitle.toJSON()).toMatchSnapshot();
  expect(heading.toJSON()).toMatchSnapshot();
  expect(caption.toJSON()).toMatchSnapshot();
});
