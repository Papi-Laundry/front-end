import { Image, KeyboardAvoidingView, SafeAreaView, Text, View } from "react-native"
import { pickerSelectStyles, styles } from "../styles/style"
import { TextInput, Button } from "react-native-paper"
import { useState } from "react"
import * as React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Picker from "react-native-picker-select";
import { PickerIOS } from "@react-native-picker/picker";
export const RegisterForm = () => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [selectedValue, setSelectedValue] = useState('option1')
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                // style={styles.container}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
            >
                <View>
                    <View style={styles.containerImage}>
                        <Image
                            source={require('../assets/IMG/37-sign-up.png')}
                            style={{ width: 280, height: 180, marginTop: 30 }}
                        />
                    </View>
                    <View>
                        {/* <Text style={styles.welcomeText}>!</Text> */}
                        <Text style={styles.loginText}>Create Account</Text>
                    </View>

                    <View style={styles.containerForm}>
                        <Text style={styles.formText}>Username</Text>
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

                        <Text style={styles.formText}>Select roles</Text>
                        <View style={styles.formInputOuter}>
                        </View>

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
                        </Button>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}