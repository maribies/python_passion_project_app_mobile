import React from "react";
import { H1, H3 } from "./Components/Text";
import { Layout } from "./Components/Layout.native";
import { ThemeProvider } from 'emotion-theming'

const theme = {
  marginTop: '20px',
  marginBottom: '20px',
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <H1>Find and Seek</H1>
        <H3>FIND THE PERFECT PIECE FROM ANYWHERE ON THE INTERNET</H3>
        <H3>Search</H3>
        <H3>Filters</H3>
        <H3>Product</H3>
      </Layout>
    </ThemeProvider>
  );
}
