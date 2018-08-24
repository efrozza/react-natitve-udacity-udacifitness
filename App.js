import React from 'react';
import { View } from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends React.Component {
  state = {
    run: 0,
    bike: 0,
    swin: 0,
    sleep: 0,
    eat: 0,
  };

  componentDidMount() {
    debugger;
  }
  render() {
    return (
      <View>
        <AddEntry />
      </View>
    );
  }
}
