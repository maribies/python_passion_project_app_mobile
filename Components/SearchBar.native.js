import React, { useState } from "react";
import styled from "@emotion/native";
import { H3 } from "./Text.native";

const Search = styled.TextInput`
  height: 48px;
  background-color: lavender;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: ${(props) => props.theme.margin};
`;

export const SearchBar = () => {
  const [text, setText] = useState("");

  return (
    <>
      <H3 style={{ marginBottom: 0 }}>Search</H3>
      <Search
        placeholder="What are you seeking?"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
    </>
  );
};
