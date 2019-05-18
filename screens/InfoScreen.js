import React from 'react';
import { StyleSheet, Text, View, Image , ScrollView} from 'react-native';
import MenuButton from '../components/MenuButton';



export default class InfoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <MenuButton navigation={this.props.navigation}/>
      <ScrollView>
        <Text style={{textAlign:'center', fontSize: 30, marginTop:70, textColor:'orange', fontStyle:'bold'}}>Biodata</Text>
        <View style={styles.biodata}>
        <Image style={styles.img} source={require('../assets/ZAKI.jpg')}/>
          <Text>Zakiyudin Kamil Fikri</Text>
          <Text>173140714111035</Text>
          <Text>zf.kamil@gmail.com</Text>
          
        </View>
        <View style={styles.biodata}>
        <Image style={styles.img} source={require('../assets/ganar.jpg')}/>
          <Text>Ganar Waskito Jati</Text>
          <Text>173140714111066</Text>
          <Text>ganartito@gmail.com</Text>
          
        </View>
        <View style={styles.biodata}>
        <Image style={styles.img} source={require('../assets/reank.jpg')}/>
          <Text>Rifqi Firdaus AL Jauhari</Text>
          <Text>173140714111059</Text>
          <Text>rifqifirdausaljauhari@gmail.com</Text>
          
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  biodata:{
    backgroundColor: '#F0FFFF',
    width: 400,
    height: 200,
    borderBottomColor: 'orange',
    borderBottomWidth:2,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  img: {
    height:70,
    width:70,
    borderRadius: 50,
},
});
