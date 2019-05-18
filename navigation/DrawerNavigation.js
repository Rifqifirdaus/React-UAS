import React from 'react';
import { Platform, Dimensions} from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import  Icon  from '@expo/vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen';
import TodosScreen from '../screens/TodosScreen';
import MapsScreen from '../screens/MapsScreen';
import InfoScreen from '../screens/InfoScreen';
import ContactScreen from '../screens/ContactScreen';
import firebase from "firebase";
import AuthloadingScreen from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import OtherScreen from '../screens/OtherScreen';
import MenuButton from '../components/MenuButton';
import MenuDrawer from '../components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const BottomNav = createMaterialBottomTabNavigator({
    Home: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({tintColor})=>( <Icon name='ios-home' color={tintColor} size={24}  /> )
        }
    },

    Info :{
        screen: InfoScreen,
        navigationOptions: {
            tabBarLabel: "Info",
            tabBarIcon: ({tintColor})=>( <Icon name='ios-information-circle-outline' color={tintColor} size={24}  /> )
        },
    },

    Contact:{
        screen: ContactScreen,
        navigationOptions: {
            tabBarLabel: "Contact",
            tabBarIcon: ({tintColor})=>( <Icon name='ios-contact' color={tintColor} size={24}  /> )
        },
    },
    
},
    {
        activeTintColor:'orange',
    });

const DrawerNav = createDrawerNavigator(
    {
        Profile:{
            screen : BottomNav
        },
        Todos: {
            screen: OtherScreen
        },
        Maps :{
            screen: MapsScreen
        },
    })

const AppStack = createStackNavigator(
    {    

        AppNav: {
            screen: DrawerNav,
            navigationOptions: {
                header: null,
            }
        },
});
const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent:({ navigation})=> {
        return (
            <MenuDrawer navigation={navigation}/>
        )
    }
}

// const DrawerNavigator = createDrawerNavigator(
//         {
//         Profile : {
//             screen: ProfileScreen
//         },
//         Todos: {
//             screen: TodosScreen
//         },
//         Maps :{
//             screen: MapsScreen
//         }
//     },
//     DrawerConfig
// );

// const BottomNav = createMaterialBottomTabNavigator({
//     Home :{
//         screen: ProfileScreen
//     },
//     Info :{
//         screen: InfoScreen
//     },
//     Contact :{
//         screen: ContactScreen
//     }
// })

export default createAppContainer(createSwitchNavigator(
    {
        // AuthLoading: AuthLoadingScreen,
        App: AppStack,
        
    },
    // {
    //     initialRouteName: 'AuthLoading',
    // }
));


  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  // });
