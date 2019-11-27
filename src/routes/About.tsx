import React from 'react';
import { View, Text, Button } from 'react-native';


export class AboutScreen extends React.Component<any, any> {
    static navigationOptions = {
        title: '关于',
        headerRight: () => (
            <Button
                onPress={() => console.log('This is a button!')}
                title="Info"
                color="#fff"
            />)
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>About Scree1n</Text>
                <Text>{this.props.navigation.getParam('itemId')}</Text>
                <Text>{this.props.navigation.getParam('otherParam')}</Text>
                <Button
                    title="Go to Detail3s"
                    onPress={() => this.props.navigation.push('Home')}
                />
                <Button
                    title="Go to goBack"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

