import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderHome from "../components/home/HeaderHome";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import Posts from "../data/posts";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome />
      <Stories />
      <ScrollView>
        {Posts.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    width: "100%",
  },
});
