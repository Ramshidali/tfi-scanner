import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {darkGreen} from '../components/Constants';
import Btn from '../components/Btn';

const SuccessScreen = ({navigation}) => {

    return(
        <View style={{alignItems: 'center',}}>
            <View style={{paddingTop: 200}}>
                <Image 
                    style={{
                        height: 70,
                        width: 70,
                        marginBottom: 20,
                    }}
                    source={require('../assets/tick.png')}
                />
            </View>
                <Text style={{fontSize: 30}}>Success</Text>
                <Btn textColor='white' bgColor={darkGreen} btnLabel="Scan Again" Press={() => navigation.navigate('Scanner')} />
        </View>
    );
};

export default SuccessScreen;