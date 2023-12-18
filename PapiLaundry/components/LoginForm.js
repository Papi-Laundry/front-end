import React, { useState, useContext } from "react";
import { Image, KeyboardAvoidingView, SafeAreaView, Text, View, Pressable, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";
import { styles } from "../styles/style";
import { LoginContext } from '../context/LoginContext';
import BASE_URL from "../env/env";
import { useNavigation } from "@react-navigation/native"; 

export const LoginForm = () => {
    const { loginAction } = useContext(LoginContext)
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState({
      email: '',
      password: ''
    });

    const navigation = useNavigation();
  
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
        setLoading(true)
        const response = await axios.post(`${BASE_URL}/login`, {
          usernameOrEmail: input.email,
          password: input.password
        });

        if(!response.data.message) {
          loginAction("token", (response.data.access_token))
        }
      } catch (error) {
        setErrorMessage(error.response.data.message)
      } finally {
        setLoading(false)
      }
    };

    const handleRegisterPress = () => {
      navigation.navigate('Register');
    };

    return (
        <>
            <SafeAreaView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
                >
                    <ScrollView>
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
                            {errorMessage && <Text style={{
                              ...styles.formText,
                              color: '#FFA063'
                            }}>{errorMessage}</Text>}
                            <Text style={styles.formText}>Username/Email</Text>
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
                            {loading === false ? <Button
                              style={styles.loginButton}
                              mode="contained"
                              onPress={handleLogin}
                            >
                              <Text>Login</Text>
                            </Button> : 
                            <Button
                              style={{
                                ...styles.loginButton,
                                backgroundColor: '#FFFADD'
                              }}
                              mode="contained"
                            >
                              <Text style={{
                                color: '#FFB559'
                              }}>Loading</Text>
                            </Button>}
                            <Text style={{ fontSize: 15, marginTop: 10 }}>
                                Don't have an account?{" "}
                                <Pressable onPress={handleRegisterPress}>
                                  <Text style={styles.TextStyle}>Register</Text>
                                </Pressable>{" "}Anyway
                            </Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    )
}