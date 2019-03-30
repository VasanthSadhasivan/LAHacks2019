import React, { Component } from 'react'
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class OrgScreen extends Component {
  constructor(props){
      super(props);
      this.state = {
          loading: false,
          data: [
              {name: 'USC Health'},
              {name: 'UCI Health'},
              {name: 'UCSD Health'},
              {name: 'Kaiser Permanente'},
              {name: 'Blue Shield'},
              {name: 'Mercy Medical'},
              {name: 'Dignity Health'},
          ],
      }
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} 
        renderItem={({item}) => (
            <View style={styles.boxContainer} >
                <TouchableOpacity style={styles.boxWithShadow}>
                    <Text style={styles.boxText}>{item.name}</Text><Icon name="arrow-right" color="#BA9BFD" size={20} style={styles.boxIcon}/>
                </TouchableOpacity>
            </View>
         )}
         keyExtractor={(item, index) => item.name} />
      </View>
    )
  }
}

const styles = {
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      boxContainer: {
          flexGrow: 1,
          //justifyContent:'center',
          //alignItems:'center',
          flexDirection:'column'
      },
      box: {
          flex: 1,
          padding: 20,
          
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: 20,
      },
      boxWithShadow: {
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-between',
        borderRadius:20,
        padding:20,
        margin:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 1.5,  
        elevation: 4
    },
      boxIcon: {
          position:'relative',
          bottom:5,
      }
}