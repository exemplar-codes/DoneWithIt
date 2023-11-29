import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({ images, onAdd, onRemove }) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        {images.map((uri) => (
          <ImageInput
            key={uri}
            image={uri}
            onAdd={onAdd}
            onRemove={onRemove}
            showDeleteConfirmation={false}
          />
        ))}
        <ImageInput key="extra" image="" onAdd={onAdd} />
      </ScrollView>
    </View>
  );
}

// the following solves height problems of ScrollView
const styles = StyleSheet.create({
  scrollContainer: {
    // width: "100%", // don't do this. let the scroll dimension be unspecified
    padding: 8,

    // flexDirection: "row", // not needed since horizontal specified
    gap: 16,
  },
  container: {
    // borderWidth: 1,
  },
});
