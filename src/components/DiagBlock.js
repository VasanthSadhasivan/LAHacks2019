import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class DiagBlock extends Component {
  constructor(props){
      super(props);
  }
  render() {
    return (
      <View style={this.props.first? styles.mainDiagnosis: styles.subDiagnosis}>
      <TouchableOpacity>
        <Text style={this.props.first? styles.mainFont: null}> {this.props.first? `You have `:null}{this.props.name} </Text>
        <Text>{this.props.accuracy}% sure</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
    mainDiagnosis: {
        paddingRight: 80,
        paddingLeft: 40,
        paddingTop: 80,
        paddingBottom: 80,
        fontSize:30,
        margin:15,
        backgroundColor: '#FFFFFF',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.16,
        shadowRadius: 10.32,  
        elevation: 16
    },
    subDiagnosis: {
        padding: 40,
        margin:15,
        backgroundColor: '#FFFFFF',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.16,
        shadowRadius: 10.32,  
        elevation: 8
    },
    mainFont: {
        fontSize:30,
    }

}