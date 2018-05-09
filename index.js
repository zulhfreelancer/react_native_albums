// import libraries to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// create component
const App = () => (
  <Header headerText='Albums' />
);

// render the component
AppRegistry.registerComponent('albums', () => App);
