import PropTypes from "prop-types";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
  Text,
} from "react-native";

/**
 * Cross platform SafeAreaView
 * Makes sure system UI is visible on both ios and Android
 *
 * @param fullScreen go fullscreen? default: false
 * @param style styles (for convenience, and to avoid wrapper soup)
 */
export default function AppScreen(props) {
  // negate safety - go fullscreen
  if (props.fullScreen) {
    return (
      <View style={[styles.fullScreenStyle, props.style]}>
        {props.children}
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.topSafety, props.style]}>
      {props.children}
    </SafeAreaView>
  );
}

AppScreen.propTypes = {
  styles: PropTypes.object,
  fullScreen: PropTypes.bool,
};

AppScreen.defaultProps = {
  fullScreen: false,
};

AppScreen.Example = (props) => (
  <AppScreen {...props}>
    <Text style={{ color: "red" }}>Hello, there</Text>
  </AppScreen>
);

const styles = StyleSheet.create({
  fullScreenStyle: {
    flex: 1,
  },
  topSafety: {
    flex: 1,
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
