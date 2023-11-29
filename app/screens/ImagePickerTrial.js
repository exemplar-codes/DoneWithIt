import {
  Alert,
  BackHandler,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as NavigationBar from "expo-navigation-bar";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import AppScreen from "../components/AppScreen";

export default function ImagePickerTrial() {
  // useEffect(() => {}, []);
  const [allGranted, setAllGranted] = useState(false);
  const [pickedAssets, setPickedAssets] = useState([]);
  const startPermissionsFlow = async () => {
    // const permReturnage = await Permissions.askAsync(
    //   Permissions.AUDIO_RECORDING,
    //   Permissions.CAMERA,
    //   Permissions.MEDIA_LIBRARY
    // );
    const permReturnage = await ImagePicker.requestCameraPermissionsAsync();

    console.log(permReturnage);
    setAllGranted(permReturnage.granted);
    if (!permReturnage.granted) {
      alert("Permissions not granted, please grant them");
    }
  };

  useEffect(() => {
    startPermissionsFlow();
  }, []);

  const deleteIcon = (uri) => {
    setPickedAssets((prev) => {
      return [...prev.filter((assetItem) => assetItem.uri !== uri)];
    });
  };

  const addIcon = (asset) => {
    setPickedAssets((prev) => {
      return [...prev, ...(Array.isArray(asset) ? asset : [asset])];
    });
  };

  const startImageFlow = async () => {
    if (allGranted) {
      const result = await ImagePicker.launchImageLibraryAsync();

      console.log(result);
      const { assets = [] } = result;
      // setPickedAssets(assets);
      addIcon(assets);
    } else {
      alert("Cannot start image popup, permissions not granted");
    }
  };

  useEffect(() => {
    if (Platform.OS !== "android") return;

    const backAction = () => {
      // Alert.alert("Hold on!", "Are you sure you want to go back?", [
      //   {
      //     text: "Cancel",
      //     onPress: () => null,
      //     style: "cancel",
      //   },
      //   { text: "YES", onPress: () => BackHandler.exitApp() },
      // ]);
      setPreviewAsset(null);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, [previewAsset]);

  const [previewAsset, setPreviewAsset] = useState(null);
  return (
    <AppScreen>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: previewAsset ? 0 : 16,
        }}
      >
        {previewAsset ? (
          <TouchableOpacity
            style={{ width: "100%" }}
            // onPress={() => setPreviewAsset(null)}
          >
            <Image
              resizeMode="cover"
              resizeMethod="resize"
              source={{
                uri: previewAsset.uri,
                width: "100%",
                height: "100%",
              }}
            />
          </TouchableOpacity>
        ) : null}
        {allGranted ? (
          !previewAsset ? (
            <>
              {/* <AppButton title="Start library" onPress={startImageFlow} /> */}
              <AppButton title="Add image" onPress={startImageFlow} />
              {pickedAssets.length === 0 ? (
                <Text>No assets picked</Text>
              ) : (
                <View>
                  {pickedAssets.map((assetItem) => {
                    return (
                      <View
                        key={assetItem.uri}
                        style={{
                          borderWidth: 1,
                          width: "100%",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <TouchableOpacity
                          style={{ width: "100%", height: 100, flexShrink: 1 }}
                          onPress={() => setPreviewAsset(assetItem)}
                        >
                          <Image
                            source={{
                              uri: assetItem.uri,
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </TouchableOpacity>
                        <MaterialCommunityIcons
                          name="trash-can"
                          onPress={() => deleteIcon(assetItem?.uri)}
                          size={50}
                          style={{ flexShrink: 0 }}
                        />
                      </View>
                    );
                  })}
                </View>
              )}
            </>
          ) : null
        ) : (
          <AppButton
            title="Check and get permissions"
            onPress={startPermissionsFlow}
          />
        )}
      </ScrollView>
    </AppScreen>
  );
}

const result = {
  AUDIO_RECORDING: {
    // popup the first time with options - 'Only while using', 'just this once', 'Dont allow'
    // response is saved.
    // so when asked again (on another start up), the same result is given directly, no user popup.
    canAskAgain: true,
    expires: "never",
    granted: true,
    permissions: {
      audioRecording: {
        canAskAgain: true,
        expires: "never",
        granted: true,
        status: "granted",
      },
    },
    status: "granted",
  },
  AUDIO_RECORDING_AGAIN: {
    canAskAgain: true,
    expires: "never",
    granted: true,
    permissions: {
      audioRecording: {
        canAskAgain: true,
        expires: "never",
        granted: true,
        status: "granted",
      },
    },
    status: "granted",
  },
  multipl_camera_and_audio: {
    canAskAgain: true,
    expires: "never",
    granted: true,
    permissions: {
      audioRecording: {
        canAskAgain: true,
        expires: "never",
        granted: true,
        status: "granted",
      },
      camera: {
        canAskAgain: true,
        expires: "never",
        granted: true,
        status: "granted",
      },
    },
    status: "granted",
  },
  // so general structure
  gen_structure: {
    canAskAgain: true,
    expires: "never",
    granted: true,
    permissions: {
      key1: {
        canAskAgain: true,
        expires: "never",
        granted: true,
        status: "granted",
      },
      key2: {},
      key3: {},
      key4: {},
    },
    status: "granted", // AND of all individual granted
  },
  k: {
    canAskAgain: "boolean",
    expires: "enum",
    granted: "boolean",
    status: "string",

    permissions: {
      k1: "sameask_but_no_child_key",
      k2: "sameask_but_no_child_key",
    },
  },
  multi_one_denied: {
    // .status changed to 'denied'
    // .granted became false
    // indivdiual
  },
};

// Permissions API
const launchLibResponse = {
  assets: [
    {
      uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FDoneWithIt-6a34c5cf-c023-4c86-9386-f1296a2e18ed/ImagePicker/92e3768b-375b-49b0-92bf-e118c3b23150.jpeg",
      // note: uri is different for each pick, even if asset is the same
      assetId: null,
      // assetId determines asset, and is the same even for different picks of the same asset
      // FIXME: actually, always comes as null. why?
      base64: null,
      duration: null,
      exif: null,
      height: 4624,
      rotation: null,
      type: "image",
      width: 2084,
    },
  ],
  canceled: false,
  cancelled: false,
};
