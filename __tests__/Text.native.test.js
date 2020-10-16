import React from "react";
import { create, act } from "react-test-renderer";
import { H1, H2, H3, MainText, Caption } from "../Components/Text.native";
import { useFonts } from "@expo-google-fonts/quattrocento";

jest.mock("@expo-google-fonts/quattrocento");

test("correctly renders the text elements", () => {
  act(() => {
    useFonts.mockReturnValue([false]);
  });

  let text = create(<MainText>Text of the main persuasion.</MainText>);
  let title = create(<H1>Title!</H1>);
  let subtitle = create(<H2>I am a subtitle.</H2>);
  let heading = create(
    <H3>Not quite a subtitle, but still more important than the rest.</H3>
  );
  let caption = create(<Caption>I am a Caption!</Caption>);

  expect(text.toJSON()).toMatchSnapshot();
  expect(title.toJSON()).toMatchSnapshot();
  expect(subtitle.toJSON()).toMatchSnapshot();
  expect(heading.toJSON()).toMatchSnapshot();
  expect(caption.toJSON()).toMatchSnapshot();

  act(() => {
    useFonts.mockReturnValue([true]);
  });

  text.update(<MainText>Text of the main persuasion.</MainText>);
  title.update(<H1>Title!</H1>);
  subtitle.update(<H2>I am a subtitle.</H2>);
  heading.update(
    <H3>Not quite a subtitle, but still more important than the rest.</H3>
  );
  caption.update(<Caption>I am a Caption!</Caption>);

  expect(title.toJSON()).toMatchSnapshot();
  expect(subtitle.toJSON()).toMatchSnapshot();
  expect(heading.toJSON()).toMatchSnapshot();
  expect(text.toJSON()).toMatchSnapshot();
  expect(caption.toJSON()).toMatchSnapshot();
});
