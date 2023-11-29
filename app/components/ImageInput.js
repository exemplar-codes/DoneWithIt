import React from "react";
import { Alert, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import defaultStyles from "../config/styles";
import * as ImagePicker from "expo-image-picker";

// Single box
// if image is empty, shows + icon and opens user's gallery
// if image is present, shows the image, onPress confirms and deletes image
export default function ImageInput({
  image,
  onAdd = () => {},
  onRemove = () => {},
  showDeleteConfirmation = true,
}) {
  // #1 Commenting, to avoid uncontrolled usage temporarily
  // adding this so it can be used standalone (like HTML input)
  // const [internalImage, setInternalImage] = useState(image);
  // const imageToUse = image ?? internalImage;

  // #1 Adding
  const imageToUse = image;
  const internalImage = image;
  const setInternalImage = () => {};

  const onPressHandler = async () => {
    if (internalImage) {
      deleteImageFlow();
    } else {
      addImageFlow();
    }
  };

  const addImageFlow = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("Need permission to continue!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    const newUri = pickerResult.assets?.[0]?.uri;

    if (newUri) {
      setInternalImage(newUri);
      onAdd(newUri);
    }
  };

  const deleteImageFlow = async () => {
    const deleteImageFlowNonUI = () => {
      setInternalImage("");
      onRemove(internalImage);
    };

    if (showDeleteConfirmation) {
      Alert.alert("Delete photo", "Remove the photo", [
        {
          text: "Cancel",
          onPress: () => {},
        },
        {
          text: "Ok",
          onPress: deleteImageFlowNonUI,
        },
      ]);
    } else {
      deleteImageFlowNonUI();
    }
  };

  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.container}>
      {imageToUse ? (
        <Image source={{ uri: imageToUse }} style={styles.image} />
      ) : (
        <Icon
          name="camera"
          size={80}
          backgroundColor={null}
          iconColor={defaultStyles.colors.dark}
        />
      )}
      {/* <Text>{internalImage}</Text> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    width: 80,
    height: 80,

    padding: 4,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 16,
    overflow: "hidden", // image corners are sharp, they don't be. Should respect border radius.
  },
  image: {
    width: 80,
    height: 80,
  },
  icon: {},
});
