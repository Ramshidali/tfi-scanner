import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryScreen from "../screens/EntryScreen";
import LoginScreen from "../screens/LoginScreen";
import ScannerScreen from "../screens/ScannerScreen";
import SuccessScreen from "../screens/SuccessScreen";


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} /> 
                <Stack.Screen name="Success" component={SuccessScreen} options={{headerShown: false}} /> 
                <Stack.Screen name="Scanner" component={ScannerScreen} options={{headerShown: false}} /> 
                <Stack.Screen name="Entry" component={EntryScreen} options={{headerShown: false}} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;