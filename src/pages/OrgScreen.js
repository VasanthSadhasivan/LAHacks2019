import React, { Component } from 'react'
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

export default class OrgScreen extends Component {
  static navigationOptions = {
    title: 'Choose your Org',
    headerBackImage: <Icon name="arrow-left" color="#FF89B3" size={20} style={{padding:5}}/>,
    headerTintColor: '#FF89B3',
  }
  constructor(props){
      super(props);
      this.state = {
          imagePath: '',
          loading: false,
          data: [
              {name: 'UCLA Health'},
              {name: 'UCI Health'},
              {name: 'UCSD Health'},
              {name: 'Kaiser Permanente'},
              {name: 'Blue Shield'},
              {name: 'Mercy Medical'},
              {name: 'Dignity Health'},
          ],
      }
  }
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
        <FlatList data={this.state.data} 
        renderItem={({item}) => (
            <View style={styles.boxContainer} >
                <TouchableOpacity style={styles.boxWithShadow} onPress={this.chooseFile.bind(this)}>
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