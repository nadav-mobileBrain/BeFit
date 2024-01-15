import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Octicons } from "@expo/vector-icons"
import { SIZES, COLORS } from '../constants';

const CatgeoryItem = ({ icon, color, numWorkouts, name, onPress }) => {
  return (
    <TouchableOpacity
        onPress={onPress} 
        style={styles.container}>
      <View style={styles.leftContainer}>
          <View style={[styles.iconContainer, { backgroundColor: color }]}>
             <Text style={styles.iconText}>{icon}</Text>
          </View>
          <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.numWorkouts}>{numWorkouts} Workouts</Text>
          </View>
      </View>
      <TouchableOpacity>
         <Octicons name="chevron-right" size={24} color="#A9B2BA" />
      </TouchableOpacity>
  </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    container: {
        width: SIZES.width - 32,
        height: 77,
        borderRadius: 7.7,
        borderColor: "#E5E9EF",
        borderWidth: 1,
        paddingHorizontal: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconContainer: {
        height: 61.6,
        width: 61.6,
        borderRadius: 7.7,
        marginRight: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    name: {
        fontSize: 15.4,
        color: COLORS.black,
        fontFamily: "medium",
        marginBottom: 4
    },
    numWorkouts: {
        fontSize: 14,
        fontFamily: "regular",
        color: "#404B52"
    }
})

export default CatgeoryItem