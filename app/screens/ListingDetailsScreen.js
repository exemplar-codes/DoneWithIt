import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Image
        style={styles.imageStyles}
        source={require("../assets/jacket.jpg")}
      />
      <View style={styles.content}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={{ marginTop: 32 }}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  imageStyles: {
    width: "100%",
    height: 300,
  },
  title: { fontSize: 24 },
  price: { color: colors.secondary, fontWeight: 800, marginTop: 8 },
  content: { padding: 16 },
});
