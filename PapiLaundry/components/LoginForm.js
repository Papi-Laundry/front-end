
import React, { useState, useContext } from "react";
import { Image, KeyboardAvoidingView, SafeAreaView, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";
import { styles } from "../styles/style";
import { LoginContext } from '../context/LoginContext';
import { Link } from "@react-navigation/native";

export const LoginForm = () => {
    const { loginAction } = useContext(LoginContext)
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [input, setInput] = useState({
      email: '',
      password: ''
    });
  
    const handleEmailChange = (text) => {
      setInput({
        ...input,
        email: text
      });
    };
  
    const handlePasswordChange = (text) => {
      setInput({
        ...input,
        password: text
      });
    };
  
  
    const handleLogin = async () => {
      try {
          const response = await axios.post("http://localhost:3001/login", {
            usernameOrEmail: input.email,
            password: input.password
          });
      
          // Check if response and response.data are defined
          if (response && response.data) {
            console.log("Login successful", response.data.access_token);
            await loginAction("token", (response.data.access_token));
            // You may want to navigate to a different screen or show a success message
          } else {
            console.error("Invalid response format", response);
          }
        } catch (error) {
          // Handle errors, e.g., show an error message to the user
          console.error("Login failed", error.response ? error.response.data : error.message);
        }
    };

    return (
        <>
            <SafeAreaView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    // style={styles.container}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
                >
                    <View>
                        <View style={styles.containerImage}>
                            <Image
                                source={require('../assets/IMG/189.-On-Demand-Services.png')}
                                style={{ width: 280, height: 250, marginTop: 50 }}
                            />
                        </View>
                        <View>
                            <Text style={styles.welcomeText}>Welcome Back!</Text>
                            <Text style={styles.loginText}>Login With</Text>
                        </View>

                        <View style={styles.containerForm}>
                            <Text style={styles.formText}>Email</Text>
                            <View style={styles.formInputOuter}>
                                <TextInput
                                autoCapitalize="none"
                                mode="outlined"
                                outlineColor="#F7F8FC"
                                style={styles.formInputInner}
                                value={input.email}
                                onChangeText={handleEmailChange}
                                theme={{ roundness: 15 }}
                                />
                            </View>

                            <Text style={styles.formText}>Password</Text>
                            <View style={styles.formInputOuter}>
                                <TextInput
                                style={styles.formInputInner}
                                autoCapitalize="none"
                                mode="outlined"
                                secureTextEntry={secureTextEntry}
                                outlineColor="#F7F8FC"
                                value={input.password}
                                onChangeText={handlePasswordChange}
                                theme={{ roundness: 15 }}
                                right={
                                    <TextInput.Icon
                                    icon={secureTextEntry ? "eye-off" : "eye"}
                                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                                    />
                                }
                                />
                            </View>
                        </View>
                        <View style={styles.formInputOuter}>
                            <Button
                            style={styles.loginButton}
                            mode="contained"
                            onPress={handleLogin}
                            >
                            Login
                            </Button>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    )
}