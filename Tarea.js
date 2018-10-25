// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// create a component
class Tarea extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{this.props.item.texto}</Text>
        <TouchableOpacity onPress={()=>{this.props.eliminar(this.props.item.key)}}>
            <Ionicons
            name="md-trash"
            size={24}
            color="gray"
            />
        </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  texto: {
    fontSize: 24,
  },
});

// make this component available to the app
export default Tarea;
