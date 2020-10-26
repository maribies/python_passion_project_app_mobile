import React from "react";
import { ThemeProvider } from "emotion-theming";
import { AppLoading } from "expo";
import {
  useFonts,
  Quattrocento_400Regular,
  Quattrocento_700Bold,
} from "@expo-google-fonts/quattrocento";
import {
  FanwoodText_400Regular,
  FanwoodText_400Regular_Italic,
} from "@expo-google-fonts/fanwood-text";

import { H1, H3 } from "./Components/Text";
import { Layout } from "./Components/Layout.native";
import { Products } from "./Components/Products.native";
import { SearchBar } from "./Components/SearchBar.native";
import { Filters } from "./Components/Filters.native";

import products from "./Fixtures/products";
import filters from "./Fixtures/filters.json";

const theme = {
  margin: "20px",
  fontXLarge: "33px",
  fontLarge: "26px",
  fontMedium: "20px",
  fontDefaultSize: "16px",
  fontSmall: "12.5px",
  fontDefaultFamily: "Georgia",
  fontDefaultWeight: "normal",
  marginTop: "20px",
  marginBottom: "20px",
  colors: {
    primary: "lavender",
  },
  inputs: {
    borderRadius: "8px",
    padding: "8px",
  },
};

export default function App() {
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
      <ThemeProvider theme={theme}>
        <Layout>
          <H1>Find and Seek</H1>
          <H3>FIND THE PERFECT PIECE FROM ANYWHERE ON THE INTERNET</H3>
          <SearchBar />
          <Filters types={filters} />
          <Products products={products} />
        </Layout>
      </ThemeProvider>
    );
  }
}
