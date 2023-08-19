import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/core";

const LoginForm = () => {
  const Navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("required"),
      password: Yup.string().required("required"),
    }),
    onSubmit: (values) => {
      Navigation.replace("Application");
    },
  });
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputFeild}>
        <TextInput
          placeholder="phone number or username or email"
          placeholderTextColor="#444"
          textContentType="emailAddress"
          autoFocus={true}
          autoCapitalize="none"
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
      </View>
      {formik.touched.email && formik.errors.email ? (
        <Text style={styles.errorText}>{formik.errors.email}</Text>
      ) : null}
      <View style={styles.inputFeild}>
        <TextInput
          placeholder="password"
          placeholderTextColor="#444"
          textContentType="password"
          autoCorrect={false}
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
      </View>
      {formik.touched.password && formik.errors.password ? (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      ) : null}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
  },
  inputFeild: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0096F6",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 42,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
});
