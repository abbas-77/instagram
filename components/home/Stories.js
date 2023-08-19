import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Users from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginTop: 15 }}>
      <ScrollView horizontal>
        {Users.map((story, index) => {
          return (
            <View key={index} style={{ alignItems: "center" }}>
              <Image source={{ uri: story.image }} style={styles.story} />
              <Text style={{ color: "white" }}>{story.username}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "tomato",
  },
});
