import React from "react";
import { View, ImageBackground } from "react-native";

import bgimage from "../assets/background-image-2.jpg"


const Background = ({children}) => {
    return (
        <View>
            <ImageBackground source={bgimage} style={{ height: '75%', width: "100%" }} />
            <View style={{ position: "absolute" }}>
                {children}
            </View>
        </View>
    );
};

export default Background;