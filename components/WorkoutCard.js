import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const WorkoutCard = ({ name, level, duration, image, onPress }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={styles.container}>
        <Image
          source={image}
          resizeMode='cover'
          style={styles.image}
        />
        <View>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.level}>{level}</Text>
                <View style={styles.view}/>
                <Text style={styles.duration}>{duration} min</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 231,
        height: 208,
        flexDirection: "column",
        marginRight: 16
    },
    image: {
        width: "100%",
        height: 154,
        borderRadius: 12
    },
    name: {
        fontSize: 15.4,
        fontFamily: "medium",
        color: COLORS.black,
        marginVertical: 4
    },
    level: {
        fontSize: 12,
        fontFamily: "medium",
        color: COLORS.primary
    },
    view: {
        height: 4,
        width: 4,
        borderRadius: 4,
        backgroundColor: COLORS.black,
        marginHorizontal: 12
    },
    duration: {
        fontSize: 12,
        fontFamily: "regular",
        color: COLORS.black
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
})
export default WorkoutCard