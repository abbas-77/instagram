import { Image, StyleSheet, View } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logoImg}
        source={require("./../../assets/login-logo.png")}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 60,
    alignItems: "center",
  },
  logoImg: {
    width: 100,
    height: 100,
  },
});
