import React, { Component } from 'react'
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import Svg, { Path } from 'react-native-svg';

export default class OrgScreen extends Component {
  static navigationOptions = {
    title: 'Choose your Org',
    headerBackImage: <Icon name="arrow-left" color="#FF89B3" size={20} style={{padding:5}}/>,
    headerTintColor: '#FF89B3',
    headerTitleStyle:{fontFamily:'IBMPlexSans'}
  }
  constructor(props){
      super(props);
      this.state = {
          imagePath: '',
          loading: false,
          data: [
              {name: 'UCLA Health Center'},
              {name: 'UCI Health'},
              {name: 'UCSD Health'},
              {name: 'Kaiser Permanente'},
              {name: 'Blue Shield'},
              {name: 'Mercy Medical'},
              {name: 'Dignity Health'},
          ],
      }
  }
  chooseFile = (organization_name) => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      console.log(organization_name);
      
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response["uri"];
        this.props.navigation.push('Diagnose', {organization_name: organization_name,
          source: source });
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          imagePath: source,
        });
      }
    })
  };
  render() {
    return (
      <View style={styles.container}>
      <Svg style={styles.svg} width="411" height="801" viewBox="0 0 411 801" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M112.374 397.348C-9.18244 523.439 48.7986 586.485 -9.18244 646C-83.6197 646 -143.963 540.094 -143.963 409.453C-143.963 278.812 -173.315 233.43 -9.18244 126C-24.4406 233.43 233.931 271.257 112.374 397.348Z"
    fill="#88FFF8" fillOpacity="0.46" />
    <Path d="M408.197 785.748C408.197 844.429 314.804 892 199.598 892C84.3926 892 -9 844.429 -9 785.748C-9 727.066 -1.84253 813.444 199.598 679.496C545.232 243.408 408.197 727.066 408.197 785.748Z"
    fill="#6FFF98" fillOpacity="0.35" />
    <Path d="M543.36 185.118C543.36 260.589 629.047 314.207 411.533 349C495.196 314.207 411.533 259.747 304.55 203.775C216.327 157.618 423.194 -31.7108 489.615 4.59538C556.54 4.59538 543.36 109.647 543.36 185.118Z"
    fill="#FF89B3" fillOpacity="0.7" />
</Svg>
        <FlatList data={this.state.data} 
        renderItem={({item}) => (
            <View style={styles.boxContainer} >
                <TouchableOpacity style={styles.boxWithShadow} onPress={this.chooseFile.bind(this,item.name)}>
                    <Text style={styles.boxText}>{item.name}</Text><Icon name="arrow-right" color="#BA9BFD" size={30} style={styles.boxIcon}/>
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
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.16,
        shadowRadius: 10.32,  
        elevation: 16
    },
      boxIcon: {
          position:'relative',
          bottom:5,
      },
      boxText: {
          fontSize: 20,
          fontFamily:'IBMPlexSans'
      },
      svg: {
        position: 'absolute',
        top: 0,
      },
}