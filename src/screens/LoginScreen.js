import { React, useState } from "react";
import { TextInput, Button, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
// import Navigation from '../components/Navigation';
// import Background from "../components/Background.js";
import bgimage from "../assets/bg-image.jpg"


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        
        <View style={styles.container}>
            <ImageBackground source={bgimage} style={{ height: '100%', width: "100%" }} />
            <View style={styles.wrapper}>
                <View style={styles.loginContainer}>
                    <TextInput 
                        style={styles.input}
                        value={email}  
                        placeholder="Enter Email" 
                        onChangeText={text => setEmail(text)}
                    />

                    <TextInput 
                        style={styles.input} 
                        value={password}
                        placeholder="Enter Password"
                        onChangeText={text => setPassword(text)} 
                        secureTextEntry
                    />
                    <Button title="Login" onPress={() => navigation.navigate('Scanner')} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    wrapper: {
        padding: "5%",
        margin: '0',
        position: "absolute",
    },
    loginContainer: {
        padding: "10%",
        backgroundColor: "white"
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#bbb",
        borderRadius: 5,
        paddingHorizontal: 14,
    },
});

export default LoginScreen;