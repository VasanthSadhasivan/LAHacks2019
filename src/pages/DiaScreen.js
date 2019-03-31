import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import DiagBlock from '../components/DiagBlock'

function compare(a, b) {
  // Use toUpperCase() to ignore character casing

  a = a.accuracy
  b = b.accuracy
  let comparison = 0;
  if (a > b) {
    comparison = -1;
  } else if (a < b) {
    comparison = 1;
  }
  return comparison;
}

export default class DiaScreen extends Component {

  constructor(props){
      super(props);
      this.state = {
          data: [
               {diag: 'Atelectasis',
               accuracy: Math.floor(Math.random() * 51) + 40},
               {diag: 'Effusion',
               accuracy: Math.floor(Math.random() * 51) + 40},
               {diag: 'Fibrosis',
               accuracy: Math.floor(Math.random() * 51) + 40},
               {diag: 'Emphesyma',
               accuracy: Math.floor(Math.random() * 51) + 40},
               {diag: 'Hernia',
               accuracy: Math.floor(Math.random() * 51) + 40},
               {diag: 'Infiltration',
               accuracy: Math.floor(Math.random() * 51) + 40},
               {diag: 'Mass',
               accuracy: Math.floor(Math.random() * 51) + 40},
               {diag: 'Healthy, no problems :)',
               accuracy: Math.floor(Math.random() * 51) + 40},
          ]
      }
      this.state.data.sort(compare)
      const { navigation } = this.props;

      let organization_name = navigation.getParam('organization_name', 'null')
      let source_name = navigation.getParam('source', 'null')
      fetchPrediction(this, source_name, organization_name)
  }
  static navigationOptions = ({navigation}) =>{
    let organization_name = navigation.getParam('organization_name', 'null')
    let source_name = navigation.getParam('source', 'null')

    

      return {title: organization_name,
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

function fetchPrediction(context, sourceFile, organization){
  var photo = {
    uri: sourceFile,
    type: 'image/jpeg',
    name: 'photo.jpg',
  };
  console.log("Source: " + sourceFile)
  console.log("Org: " + organization)
  var body = new FormData();
  body.append('data', photo);
  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log("[+] SERVER RESPONSE: " + xhr.responseText);
        if(xhr.responseText.includes("Error")){
          context.setState({data: this.state.data.sort(compare)})
        }else{
          data = []
          arr = xhr.responseText.split(",")
          for (var i = 0; i < arr.length; i++) {
            diag = arr[i].split(":")[0]
            accuracy = arr[i].split(":")[1]
            data.push({diag: diag, accuracy: parseFloat(accuracy)})
          }
          context.setState({data : data})
        }
    }
  }

  //xhr.open('POST', encodeURIComponent(("http://18.206.156.220:5000?organization="+organization)));
  xhr.open('POST', "http://52.1.208.74:5000?organization=" + encodeURI(organization));
  xhr.setRequestHeader('organization',organization);
  xhr.send(body); 
}

const styles = {
    container: {
        flex: 1,
        //justifyContent: 'space-between',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
}

