import React, { Component } from 'react';
import {  View, ActivityIndicator,StatusBar,AsyncStorage } from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
};

  render() {
    return (
    <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
    </View>
    );
  }
}
