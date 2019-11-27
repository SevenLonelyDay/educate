import React from 'react';
import { View, Text, Button } from 'react-native';


export class HomeScreen extends React.Component<any, any> {
    static navigationOptions = {
        title: '首页',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('About', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}
                />
            </View>
        );
    }
}

