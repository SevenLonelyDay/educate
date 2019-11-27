/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import Router from './routes/Routes';


export default class App extends React.Component {


  render() {
    const handleNavigationChange = (event: any) => {
      console.log(event);

    }
    return <Router onNavigationStateChange={handleNavigationChange}
      uriPrefix="/app" />;
  }
};
