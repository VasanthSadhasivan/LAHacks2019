import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class Login extends Component{
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.headingicon}>
        <Text style={styles.welcome}>hackLA</Text>
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.orgbutton} onPress={() => this.props.navigation.push('Org')}>
          <Text style={styles.buttontext}>Organization</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pubbutton}>
          <Text style={styles.buttontext}>Public</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.noorgCont}>
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
  headingicon: {
    flex: 2,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
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
    color:'white'
  },
  pubbutton: {
    alignItems: 'center',
    backgroundColor: '#BA9BFD',
    borderRadius: 15,
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent:"space-evenly"
  },
  noorg: {
    opacity: 0.60,
    textDecorationLine: 'underline',
  },
  noorgCont: {
    justifyContent:'center',
    alignItems:'center'
  }
});
