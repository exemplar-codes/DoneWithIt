import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import AppScreen from "../components/AppScreen";
import ImageInput from "../components/ImageInput";
import ImageInputList from "../components/ImageInputList";

export default function PhotoFormScreen() {
  const [images, setImages] = useState([]);
  const onAdd = (newUri) => {
    setImages((prev) => [...prev, newUri]);
  };
  const onRemove = (newUri) => {
    setImages((prev) =>
      prev.filter((existingUri) => !(existingUri === newUri))
    );
  };
  return (
    <AppScreen style={styles.container}>
      <ImageInputList images={images} onAdd={onAdd} onRemove={onRemove} />

      {/* <ImageInputList />  multi image picker */}
      {/* <AppTextInput /> */}
      {/* dropdown */}
      {/* <AppTextInput /> */}
      {/* + validation */}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
});
