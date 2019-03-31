import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
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
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response["fileName"];
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
<Svg width="411" height="427" style={styles.svg} viewBox="0 0 411 427" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M260.651 -43.3039C209.629 15.5836 -0.295563 121.324 257.5 427C154.113 359.122 -88 152.25 -88 78.515C-88 4.78046 -25.1806 -32.0832 44.9258 -54.9932C115.032 -77.9032 311.673 -102.191 260.651 -43.3039Z"
    fill="#FF89B3" fillOpacity="0.48" />
    <Path d="M440.336 32.5068C389.002 91.345 -1.85438 121.581 257.516 427C153.498 359.179 81 216.363 81 142.691C81 69.0177 201.92 -75.8432 275.781 -75.8432C344.676 -90.665 491.67 -26.3313 440.336 32.5068Z"
    fill="#BA9BFD" fillOpacity="0.55" />
    <Path d="M47.8014 -25.8039C-3.22065 33.0836 -57 170 254.5 424.5C151.113 356.622 -300.849 169.75 -300.849 96.015C-300.849 22.2805 -238.03 -14.5832 -167.923 -37.4932C-97.817 -60.4032 98.8234 -84.6914 47.8014 -25.8039Z"
    fill="#4CFFF4" fillOpacity="0.46" />
</Svg>
        
        <View style={styles.headingicon}>
          <Text style={styles.welcome}>Medisense</Text>
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
        <Svg width="405" style={styles.svgtwo} height="434" viewBox="0 0 405 434" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M154.655 489.191C215.343 440.324 440.734 373.631 241.455 26.956C331.111 112.15 532.542 358.808 519.42 431.366C506.297 503.923 437.92 529.019 364.856 539.086C291.791 549.154 93.9674 538.058 154.655 489.191Z"
    fill="#FF89B3" fillOpacity="0.48" />
    <Path d="M22.2533 459.535C83.2389 410.772 446.875 379.704 246 33C336.288 118.25 388.736 276.675 375.625 349.172C362.513 421.669 217.743 542.697 145.061 529.552C74.6275 531.876 -38.7322 508.298 22.2533 459.535Z"
    fill="#4CFFF4" fillOpacity="0.46" />
    <Path d="M367.221 509.851C427.909 460.984 505.196 335.824 243.962 29.9499C333.618 115.144 745.108 379.468 731.986 452.026C718.863 524.583 650.486 549.678 577.422 559.746C504.357 569.814 306.533 558.718 367.221 509.851Z"
    fill="#BA9BFD" />
</Svg>
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
    position:'absolute'
  },
  headingicon: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    flexDirection:'row',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    left: 80
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
    right: 80,
    bottom: 50,
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
    right: 80,
    bottom: 50,
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  noorg: {
    opacity: 0.60,
    textDecorationLine: 'underline',
    right: 80,
    bottom: 50,
  },
  noorgCont: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  svg: {
    position: 'absolute',
    top: 0,
  },
  svgtwo: {
    position:'absolute',
    bottom:-8
  }
});
