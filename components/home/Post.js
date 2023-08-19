import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Post = ({ post }) => {
  return (
    <View style={{ marginTop: 30 }}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 5,
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_img }} style={styles.profile} />
      <Text
        style={{
          color: "white",
          marginLeft: 10,
          fontWeight: "700",
        }}
      >
        {post.user}
      </Text>
    </View>
    <Text
      style={{
        color: "white",
        fontWeight: "900",
        marginRight: 20,
        fontSize: 25,
      }}
    >
      ...
    </Text>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.image }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ post }) => (
  <View>
    <FooterButtons />
    <FooterDetails post={post} />
  </View>
);

const FooterButtons = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 10,
    }}
  >
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <TouchableOpacity>
        <Image
          source={require("./../../assets/icons/heart.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("./../../assets/icons/comment.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("./../../assets/icons/send.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Image
          source={require("./../../assets/icons/bookmark.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const FooterDetails = ({ post }) => (
  <>
    {/* likes */}
    <Text style={{ color: "white" }}>{post.likes} likes</Text>
    {/* captions */}
    <View style={{ marginVertical: 10 }}>
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: "900" }}>{post.user}</Text>
        <Text>{post.caption}</Text>
      </Text>
    </View>
    {/* comments */}
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
    {post.comments.map((comment, index) => (
      <View key={index} style={{ marginTop: 10 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "600" }}>{post.user}</Text>
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

export default Post;

const styles = StyleSheet.create({
  profile: {
    height: 35,
    width: 35,
    borderRadius: 35,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "tomato",
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginLeft: 10,
  },
});
