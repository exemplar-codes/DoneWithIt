const ProfileScreen2 = ({ navigation }) => {
  return (
    <AppScreen style={{ backgroundColor: "gold", ...styles.center }}>
      <Text>Profile screen</Text>
      <AppButton
        onPress={() => {
          navigation.push("HomeScreen1");
        }}
        title="Go to Home 1"
        compact
      />
      {/* <AppButton onPress={() => {navigation.push('ProfileScreen2')}}   title="Go to Profile 2" compact /> */}
      <AppButton
        onPress={() => {
          navigation.push("SettingsScreen3");
        }}
        title="Go to Settings 3"
        compact
      />
    </AppScreen>
  );
};
