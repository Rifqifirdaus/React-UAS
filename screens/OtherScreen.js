    import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  Button,
  ActivityIndicator,
  StatusBar,
  FlatList,
  Text,
  StyleSheet
} from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'
import TodosScreen from './TodosScreen'
import MenuButton from '../components/MenuButton';


export default class OtherScreen extends Component {
  static navigationOptions = {
    title: 'Todos'
  }

  constructor(props) {
    console.disableYellowBox = true;
    super(props)
    this.ref = firebase.firestore().collection('todos');
    this.unsubscribe = null;
    this.state = {
      title: '',
      todos: [],
      loading: true
    };
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  };

  _addTodo = () => {
    this.ref.add({
      title: this.state.title,
      complete: false
    });

    this.setState({ title: '' })
  }

  onCollectionUpdate = (querySnapshot) => {
    const todos = [];
    querySnapshot.forEach((doc) => {
      const { title, complete } = doc.data();

      todos.push({
        key: doc.id,
        doc,
        title,
        complete
      });
    });

    this.setState({
      todos,
      loading: false
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
      <MenuButton navigation={this.props.navigation}/>
      <KeyboardAvoidingView>
        <View style={{ flexDirection: 'row', margin: 10, }}>
          <TextInput
            placeholder="Your todos"
            value={this.state.title}
            onChangeText={(text) => this.setState({ title: text })}
            style={{ padding: 5, borderBottomWidth: 1, borderColor: '#000', width: '80%' }}
          />
          <Button
            title="Add"
            disabled={!this.state.title.length}
            onPress={this._addTodo}
          />
        </View>
        <FlatList
          data={this.state.todos}
          renderItem={({ item }) =>
            <TodosScreen {...item} />}

        />
      </KeyboardAvoidingView>
      </View>
    )
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

