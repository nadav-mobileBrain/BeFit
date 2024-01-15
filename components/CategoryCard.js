import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants';

const CategoryCard = ({ icon, name, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    container: {
        width: 77,
        height: 77,
        borderRadius: 7.7,
        borderColor: "#DAE0E8",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16
    },
    icon: {
        fontSize: 24
    },
    name: {
        fontSize: 14,
        fontFamily: "medium",
        color: COLORS.black,
        marginTop: 2
    }
})

export default CategoryCard