import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthloadingScreen from './screens/AuthLoadingScreen';
import LoginScreen from './screens/LoginScreen';
import OtherScreen from './screens/OtherScreen';
import TodosScreen from './screens/TodosScreen';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from "firebase";
import DrawerNavigation from './navigation/DrawerNavigation';
import MenuButton from './components/MenuButton';
const AppStack = createStackNavigator({ Home: DrawerNavigation, Other: OtherScreen, Todo: TodosScreen});
const AuthStack = createStackNavigator({ Login: LoginScreen }, { headerMode: 'none' });

const AppContaner =  createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthloadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAGETQfDbwBx16TpTkn2ZG8FiAcUK7FY-I",
      authDomain: "tugas-akhir-50983.firebaseapp.com",
      databaseURL: "https://tugas-akhir-50983.firebaseio.com",
      projectId: "tugas-akhir-50983",
      storageBucket: "tugas-akhir-50983.appspot.com",
      messagingSenderId: "1063730915036",
      appId: "1:1063730915036:web:be0660e7f7d602e0"

    });
}


  render() {
    return (
      <AppContaner/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
