   
import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import MenuButton from '../components/MenuButton';

export default class TodosScreen extends React.PureComponent {
    _updateTodo=()=>{
        this.props.doc.ref.update({
            complete: !this.props.complete,
        });
    }

    render() {
        return (
            <View>
            <TouchableHighlight
                onPress={this._updateTodo}
            >
                <View style={{ flex: 1,height:50, flexDirection: 'row' }}>
                
                    <View style={{flex:8}}>
                        <Text>{this.props.title}</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.props.complete && (
                            <Text>COMPLETE</Text>
                        )}
                    </View>
                </View>
            </TouchableHighlight>

            </View>
        );
    }
}