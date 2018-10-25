// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, FlatList, ActivityIndicator,
} from 'react-native';
import Tarea from './Tarea';
// create a component
class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.cargando &&
          <ActivityIndicator 
          size='large'
          color='#640064'
          />
        }
        { !this.props.cargando &&
        <FlatList
          data={this.props.tareas}
          renderItem={({ item }) => <Tarea item={item} eliminar={this.props.eliminar} />}
        />}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#2D39EC',
  },
});

// make this component available to the app
export default Body;
