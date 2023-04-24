import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
        <ImageBackground style={styles.image} source={require('./assets/photo.jpg')}>
          <View style={styles.form}>
            <Text style={styles.header}>Registration</Text>
            <TextInput
              value={name}
              onChangeText={nameHandler}
              placeholder="Username"
              style={styles.input}
            />
            <TextInput
              value={password}
              onChangeText={passwordHandler}
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
            />
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text style={{color: "#ecf0f1", textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  form: {
    flex: 1,
    marginTop: 350,
    borderRadius: 40,
    backgroundColor: "#ecf0f1",
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 10,
  },
  input: {
    width: 400,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#ecf0f1",
  },
  button: {
    width: 400,
    height: 44,
    padding: 10,
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor: "#ffa500",
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});