import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ellipse from '../../src/Ellipse-1.svg'
import Svg, { Path } from 'react-native-svg';
import ImagePicker from 'react-native-image-picker';

export default class Login extends Component {
  constructor(props){
    super(props);
    state = {
      imagePath: '',
    }
  }
  static navigationOptions = { header: null };
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          imagePath: source,
        });
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Svg width="411" height="442" style={[styles.svg, ]} viewBox="0 0 411 442" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M278.651 -28.3039C227.629 30.5836 -43.5938 86.3245 214.202 392C110.815 324.122 -70 167.25 -70 93.515C-70 19.7805 -7.18059 -17.0832 62.9258 -39.9932C133.032 -62.9032 329.673 -87.1914 278.651 -28.3039Z"
    fill="#FF89B3" fillOpacity="0.48" />
    <Path d="M458.336 47.5068C407.002 106.345 16.1456 136.581 275.516 442C171.498 374.179 99 231.363 99 157.691C99 84.0177 219.92 -60.8432 293.781 -60.8432C362.676 -75.665 509.67 -11.3313 458.336 47.5068Z"
    fill="#BA9BFD" fillOpacity="0.55" />
        </Svg>
        <View style={styles.headingicon}>
          <Text style={styles.welcome}>hackLA</Text>
        </View>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.orgbutton} onPress={() => this.props.navigation.push('Org')}>
            <Text style={styles.buttontext}>Organization</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pubbutton} onPress={this.chooseFile.bind(this)}>
            <Text style={styles.buttontext}>Public</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.noorgCont} >
            <Text style={styles.noorg}>No org?</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headingicon: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  orgbutton: {
    alignItems: 'center',
    backgroundColor: '#F9C0F0',
    borderRadius: 15,
  },
  buttontext: {
    fontSize: 24,
    padding: 20,
    margin: 'auto',
    color: 'white',
    fontWeight: 'bold'
  },
  pubbutton: {
    alignItems: 'center',
    backgroundColor: '#BA9BFD',
    borderRadius: 15,
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  noorg: {
    opacity: 0.60,
    textDecorationLine: 'underline',
  },
  noorgCont: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  svg: {
    position: 'absolute',
    top: 0,
  },
});
