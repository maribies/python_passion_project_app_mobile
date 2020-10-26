import React from "react";
import { create } from "react-test-renderer";
import { H1, H2, H3, MainText, Caption } from "../Components/Text.native";

// This test is borderline unnecessary now that it is just rendering UI,
// But I'm keeping for now as it helped ensure that I passed the props correctly
// and extended the styles correctly using a new lib. So although it's not so
// helpful as a test going forward, it was helpful in the development and refactor
// of these elements.

test("correctly renders the text elements", () => {
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
});
