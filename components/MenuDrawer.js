import React, { Component } from 'react'
import { Text, View, Image, Platform, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class MenuDrawer extends Component {

    navLink(nav, text){
        return(
            <TouchableOpacity style={{height:50}} onPress={()=> this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.croller}>
        <View style={styles.topLinks}>
            <View style={styles.imageView}>
                <Image style={styles.img} source={require('../assets/admin.png')}/>
            </View>
            <View style={styles.profilText}>
                <Text style={styles.name}> Rifqi Firdaus</Text>

            </View>
        </View>
        <View style={styles.bottomLinks}>           
                {this.navLink('Profile', 'Profile')}            
            <View style={styles.garis}>
                {this.navLink('Todos', 'Todos')}
            </View>
            <View style={styles.garis}>
                {this.navLink('Maps', 'Maps')}
            </View>
            <View style={styles.garis}></View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.description}>MusicalyZ</Text>
            <Text style={styles.version}>v1.0</Text>
        </View>
        </ScrollView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },

    scroller:{
        flex:1,
    },

    profileText:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
    },
    profile:{
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        paddingTop:25,
        borderBottomWidth:1,
        borderBottomColor:'#777',
    },

    name:{
        fontSize:20,
        paddingBottom:5,
        color: 'white',
        textAlign: 'left',
    },

    img: {
        height:70,
        width:70,
        borderRadius: 50,
    },

    imageView:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        paddingLeft:20,
        paddingRight:20,
    },
    topLinks:{
        height:160,
        backgroundColor: '#6495ED',
    },
    bottomLinks:{
        flex:1,
        backgroundColor: '#E6E6FA',
        paddingTop:10,
        paddingBottom:450,

    },
    link:{
        flex: 1,
        padding:6,
        fontSize:20,
        paddingLeft:14,
        margin:5,
        textAlign: 'left'
    },

    footer:{
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white',
        borderTopWidth:1,
        borderTopColor:'lightgrey',
    },

    version:{
        flex:1,
        textAlign:'right',
        marginRight:20,
        color:'grey'
    },

    description:{
        flex:1,
        marginLeft:20,
        fontSize:16,
    },

    garis:{
        borderTopWidth:1,
        borderTopColor:'lightgrey',
    }
})