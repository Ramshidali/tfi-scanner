import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Btn from '../components/Btn';
import {darkGreen} from '../components/Constants';
import Field from '../components/Field';


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

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
          {/* <Text style={{fontSize: 30, color: darkGreen, fontWeight: 'bold'}}>
            Welcome To TFISS
          </Text> */}
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 30,
            }}>
            Login to your account
          </Text>
          <Field placeholder="Email id" value={email} keyboardType={'email-address'} />
          <Field placeholder="Password" value={password} secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 20}}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => navigation.navigate('Scanner')} />
        </View>
      </View>
    
    );
};


export default LoginScreen;