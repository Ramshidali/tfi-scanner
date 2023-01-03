import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Dimensions,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const scanBarWidth = SCREEN_WIDTH * 0.46;


import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';


const ScannerScreen = ({navigation}) => {

  const onSuccess = e => {
    console.log(e, 'data');
    navigation.navigate('Entry')
  };

  
  // Return the View
  return (
    <SafeAreaView>
      <StatusBar />
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        cameraStyle={{ height: SCREEN_HEIGHT }}
        cameraProps={{captureAudio: false}}
        style={{height: 50, width: 50, borderRadius: 10}}
      />
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({});


export default ScannerScreen;