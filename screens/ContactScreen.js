import React from 'react';
import { KeyboardAvoidingView,TextInput,View,Button,FlatList,Text, StyleSheet } from 'react-native'

import { SQLite } from "expo";
const db = SQLite.openDatabase('db.db');
import MenuButton from '../components/MenuButton';



export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Other'
}
constructor(props) {
    super(props)
    
    this.state = {
        title:'' ,
        others:[]    
    };
    
};
componentDidMount() {
    db.transaction(tx =>{
        tx.executeSql(
            'create table if not exist others (id integer primary key not null, title text, complete int)'
        )
    })
    this._getData()

}
  render() {
    return (
      <View style={styles.container}>
      <MenuButton navigation={this.props.navigation}/>
      <KeyboardAvoidingView behavior="padding" enabled>
                <View style={{ flexDirection: 'row', margin: 10, }}>
                    <TextInput
                        placeholder="Others"
                        value={this.state.title}
                        onChangeText={(text) => this.setState({ title: text })}
                        style={{ width: '80%', padding: 5, borderRadius: 5, borderColor: '#ccc', borderBottomWidth: 1, }}
                    />
                    <Button
                        title="Add"
                        disabled={!this.state.title.length}
                        onPress={this._addData} />
                </View>
                <FlatList
                    data={this.state.others}
                    renderItem={({item}) => <Text >{item.title} </Text> }
                    keyExtractor={(item, index) => item.id.toString()}
                />

            </KeyboardAvoidingView>
      </View>
    );
  }

  _addData = ()=>{
    let title = this.state.title;
    db.transaction(tx=>{
        tx.executeSql('insert into others (complete,title) values (0,?) ',[title])
    },
    null, //error
    this.setState({title:''}) //success
    )
    this._getData()
}

_getData=()=>{
    db.transaction(tx => {
        tx.executeSql('select * from others', [],(_,{rows})=>
            this.setState({ others: rows._array })
        );
    });
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
