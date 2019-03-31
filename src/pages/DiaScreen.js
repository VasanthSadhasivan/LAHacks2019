import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import DiagBlock from '../components/DiagBlock'


export default class DiaScreen extends Component {
  constructor(props){
      super(props);
      this.state = {
          data: [
               {diag: 'Ligma',
               accuracy: 89},
               {diag: 'Mass',
               accuracy: 72},
               {diag: 'Broken Arm',
               accuracy: 60},
               {diag: 'Melanoma',
               accuracy: 55},
          ]
      }
  }
  static navigationOptions = ({navigation}) =>{
      return {title: navigation.getParam('uprops', 'null'),
      headerBackImage: <Icon name="arrow-left" color="#FF89B3" size={20} style={{padding:5}}/>,
    headerTintColor: '#FF89B3',
                };
  }
  render() {
    return (
      <FlatList contentContainerStyle={styles.container} data={this.state.data} keyExtractor={item => item.diag}renderItem={({ item, index }) => (
          <DiagBlock first={index==0} name={item.diag} accuracy={item.accuracy}/>
      )}>
        <DiagBlock/>
      </FlatList>
    )
  }
}

const styles = {
    container: {
        flex: 1,
        //justifyContent: 'space-between',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
}
