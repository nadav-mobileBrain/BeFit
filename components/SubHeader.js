import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants';

const SubHeader = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
    </View>
  )
};


const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width:  SIZES.width - 32,
        marginVertical: 12
    },
    title: {
        fontSize: 19.25,
        fontFamily: "medium",
        color: COLORS.black,
    },
    viewAll: {
        fontSize: 14.4,
        fontFamily: "medium",
        color: "#9299A3"
    }
})

export default SubHeader