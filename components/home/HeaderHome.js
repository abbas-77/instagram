import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require("./../../assets/home-logo.png")}
          style={styles.logo}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("./../../assets/icons/plus.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("./../../assets/icons/heart.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.badge}>
            <Text style={styles.badgeTxt}>13</Text>
          </View>
          <Image
            source={require("./../../assets/icons/messenger.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginLeft: 10,
  },
  badge: {
    position: "absolute",
    backgroundColor: "tomato",
    width: 22,
    height: 22,
    left: 28,
    top: -5,
    zIndex: 100,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeTxt: {
    color: "white",
    fontWeight: "600",
  },
});
