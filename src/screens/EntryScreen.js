import React, { useState } from 'react';
import { Text, View, Image, Alert } from "react-native";
import Btn from '../components/Btn';
import {darkGreen} from '../components/Constants';
import Field from '../components/Field';

const EntryScreen = ({navigation}) => {
    const [cover, setCover] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <View style={{alignItems: 'center',}}>
            <View
                style={{
                    backgroundColor: 'white',
                    height: "100%",
                    width: "100%",
                    paddingTop: 100,
                    alignItems: 'center',
                }}>
                <Image 
                    style={{
                        height: 70,
                        width: 70,
                        marginBottom: 20,
                    }}
                    source={require('../assets/logo.png')}
                />
                <Text
                    style={{
                    color: 'grey',
                    fontSize: 19,
                    fontWeight: 'bold',
                    marginBottom: 30,
                    }}>
                    Enter Collection
                </Text>
                <Text
                    style={{
                        color: 'grey',
                        fontSize: 12,
                        paddingHorizontal: 40,
                        width: '78%',
                        alignSelf: 'flex-start',
                    }}>
                    No of Covers : 
                </Text>
                <Field 
                    value={cover}
                    placeholder="Enter no of covers"
                    keyboardType={'number-pad'}
                    onChangeText={cover => setCover(cover)}
                />
                <Text
                    style={{
                        color: 'grey',
                        fontSize: 12,
                        paddingHorizontal: 40,
                        width: '78%',
                        alignSelf: 'flex-start',
                    }}>
                    Amount : 
                </Text>
                <Field
                    value={amount}
                    placeholder="Enter Amount" 
                    keyboardType={'number-pad'}
                    onChangeText={amount => setAmount(amount)}
                />
                <View style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 20}}></View>
                <Btn textColor='white' bgColor={darkGreen} btnLabel="Submit" Press={() => navigation.navigate('Success')} />
                
            </View>
        </View>
    );
};

export default EntryScreen;