import { Image, KeyboardAvoidingView, SafeAreaView, Text, View } from "react-native"
import { styles } from "../styles/style"
import { TextInput, Button } from "react-native-paper"
import { useState } from "react"
import * as React from 'react';
import { Link } from "@react-navigation/native";




export const LoginForm = () => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);

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
                                    // style={{ width: 300, borderColor: "#e75151" }}
                                    mode="outlined"
                                    outlineColor="#F7F8FC"
                                    // label="Enter Email"
                                    style={styles.formInputInner}
                                    // value={input.email}
                                    // onChangeText={(text) => handleChange("email", text)}
                                    theme={{ roundness: 15 }}
                                />
                            </View>

                            <Text style={styles.formText}>Password</Text>
                            <View style={styles.formInputOuter}>
                                <TextInput
                                    style={styles.formInputInner}
                                    autoCapitalize="none"
                                    mode="outlined"
                                    // label="Enter Password"
                                    secureTextEntry={secureTextEntry}
                                    outlineColor="#F7F8FC"
                                    // value={input.email}
                                    // onChangeText={(text) => handleChange("email", text)}
                                    theme={{ roundness: 15 }}
                                    right={
                                        <TextInput.Icon
                                            icon="eye"
                                            onPress={() => {
                                                setSecureTextEntry(!secureTextEntry);
                                                return false;
                                            }}
                                        />
                                    }
                                />
                            </View>
                        </View>
                        <View style={styles.formInputOuter}>
                            <Button
                                style={styles.loginButton}
                                mode="contained"
                            // onPress={handleLogin}
                            >
                                Login
                                {/* <Link href="home"/> */}
                            </Button>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    )
}