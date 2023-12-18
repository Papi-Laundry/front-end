import React, { useState } from "react";
import { Image, KeyboardAvoidingView, SafeAreaView, Text, View, Pressable } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { RadioButton } from 'react-native-paper';
import axios from "axios";
import { styles } from "../styles/style";
import { useNavigation } from "@react-navigation/native";
import BASE_URL from "../constant/constant";

export const RegisterForm = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [selectedRole, setSelectedRole] = useState('client');
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    role: 'client', // Default role
  });
  const navigation = useNavigation()

  const handleUsernameChange = (text) => {
    setInput({
      ...input,
      username: text
    });
  };

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

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setInput({
      ...input,
      role,
    });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        username: input.username,
        email: input.email,
        password: input.password,
        role: input.role,
      });

      // Check if response and response.data are defined
      if (response && response.data) {
        console.log("Registration successful", response.data);
        // You may want to navigate to a different screen or show a success message
      } else {
        console.error("Invalid response format", response);
      }
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error("Registration failed", error.response ? error.response.data : error.message);
    }
  };

  const handleLoginPress = () => {
    // Navigate to the 'Register' screen
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <View>
          <View style={styles.containerImage}>
            <Image
              source={require('../assets/IMG/37-sign-up.png')}
              style={{ width: 280, height: 180, marginTop: 30 }}
            />
          </View>
          <Text style={styles.loginText}>Create Account</Text>

          {/* Username Input */}
          <Text style={styles.formText}>Username</Text>
          <View style={styles.formInputOuter}>
            <TextInput
              autoCapitalize="none"
              mode="outlined"
              outlineColor="#F7F8FC"
              style={styles.formInputInner}
              value={input.username}
              onChangeText={handleUsernameChange}
              theme={{ roundness: 15 }}
            />
          </View>

          {/* Email Input */}
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

          {/* Role selection */}
          <Text style={styles.formText}>Select Role</Text>
          <View style={styles.radioButtonsContainer}>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="client"
                status={selectedRole === 'client' ? 'checked' : 'unchecked'}
                onPress={() => handleRoleChange('client')}
              />
              <Text>Client</Text>
            </View>

            <View style={styles.radioButton}>
              <RadioButton.Android
                value="owner"
                status={selectedRole === 'owner' ? 'checked' : 'unchecked'}
                onPress={() => handleRoleChange('owner')}
              />
              <Text>Owner</Text>
            </View>
            {/* Add more roles as needed */}
          </View>

          {/* Password Input */}
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

          {/* Register Button */}
          <View style={styles.formInputOuter}>
            <Button
              style={styles.loginButton}
              mode="contained"
              onPress={handleRegister}
            >
              Register
            </Button>
            <Text style={{ fontSize: 15, marginTop: 10 }}>
              I have an account?{' '}
              <Pressable onPress={handleLoginPress}>
                <Text style={styles.TextStyle}>Login</Text>
              </Pressable>{' '}
              Anyway
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
