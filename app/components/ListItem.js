import React from "react";
import AppText from "./AppText";
import { Image, StyleSheet, View } from "react-native";

export default function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.listItem}>
      <Image source={image} style={styles.image} />
      <View style={{ flex: 1 }}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flexBasis: 70,
    aspectRatio: 1,
    borderRadius: 1000,
  },
  title: {},
  subTitle: {},
  listItem: {
    padding: 4,
    flexDirection: "row",
    width: "100%",
    gap: 8,
  },
});
