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
import { useProducts } from "./Hooks/useProducts";

import { H1, H3 } from "./Components/Text";
import { Layout } from "./Components/Layout.native";
import { Products } from "./Components/Products.native";
import { SearchBar } from "./Components/SearchBar.native";

import { theme } from "./theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    Quattrocento_400Regular,
    Quattrocento_700Bold,
    FanwoodText_400Regular,
    FanwoodText_400Regular_Italic,
  });

  const products = useProducts(
    "https://findandseek.herokuapp.com/api/v1/products/?page=1"
  );

  if (!fontsLoaded || products.status == "fetching") {
    return <AppLoading />;
  } else if (products.error) {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <H1>Yikes! Something went wrong!</H1>
        </Layout>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <H1>Find and Seek</H1>
          <H3>FIND THE PERFECT PIECE FROM ANYWHERE ON THE INTERNET</H3>
          <SearchBar />
          <Products products={products} />
        </Layout>
      </ThemeProvider>
    );
  }
}
