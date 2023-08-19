import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Logo from "../components/login/Logo";
import LoginForm from "../components/login/LoginForm";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <LoginForm />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    backgroundColor: "white",
    width: "100%",
  },
});
