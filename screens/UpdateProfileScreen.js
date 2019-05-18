import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from "firebase";
import Spinner from "./Spinner";

export default class UpdateProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            name:null,
            email:null,
            photoUrl:null
    };
  }

  componentDidMount() {
    this._getCurrentUser();
}

_getCurrentUser=async()=>{
    let user = await firebase.auth().currentUser;
    console.log(user);
    if (user != null) {
        this.setState({ 
            name: user.displayName, 
            email: user.email, 
            photoURL: user.photoURL
        })
    }
}

_updateProfile=()=>{
    var user = firebase.auth().currentUser;
    var credential;

    user.updateProfile({
        displayName: this.state.name,
        photoURL: "https://randomuser.me/api/portraits/men/44.jpg",
    }).then(function () {
        Alert.alert('Success','Update Data successfull')
    }).catch(function (error) {
        Alert.alert('Error', 'Error happened')
    });

    // user.updateEmail(this.state.email).then( (user) => {
    //     user.reauthenticateAndRetrieveDataWithCredential(credential).then(function () {
    //         Alert.alert('Success', 'Update successfull')
    //     }).catch(function (error) {
    //         Alert.alert('Error', 'Error happened')
    //     });

    // }).catch(function (error) {
    //     Alert.alert('Error', 'Error happened')
    // });


}
_renderButtonOrSpinner=()=>{
    if (this.state.loading) {
        return <Spinner />;
    }
    return <Button onPress={this._updateProfile} title="Update" />;
}

static navigationOptions = {
    title: 'Welcome to the app!',
};


  render() {
    return (
    <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} behavior="padding" enabled>
        <Image source={{uri:this.state.photoURL}} style={{width:200,height:200}} />
        <TextInput style={{ width: '90%',borderRadius: 5,borderColor: "grey" }} value={this.state.name} onChangeText={(text)=>{this.setState({name: text})}} placeholder="Name" />
        <TextInput style={{ width: '90%',borderRadius: 5,borderColor: "grey" }} value={this.state.email} onChangeText={(text)=>{this.setState({email: text})}} placeholder="Email" />
        
        {this._renderButtonOrSpinner()}
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
    </KeyboardAvoidingView>
    );
  }
}

_showMoreApp = () => {
    this.props.navigation.navigate('Other');
};

_signOutAsync= () => {
    firebase.auth().signOut().then(function () {
        this.props.navigation.navigate('Auth');
    }).catch(function (error) {
        console.log(error)
    });
};
