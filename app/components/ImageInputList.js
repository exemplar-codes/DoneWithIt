import React from "react";
import { View, StyleSheet } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({ images, onAdd, onRemove }) {
  return (
    <View style={styles.container}>
      {images.map((uri) => (
        <ImageInput key={uri} image={uri} onAdd={onAdd} onRemove={onRemove} />
      ))}
      <ImageInput key="extra" image="" onAdd={onAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 8,

    flexDirection: "row",
    gap: 4,
  },
});
