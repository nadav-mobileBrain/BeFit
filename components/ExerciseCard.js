import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SIZES, COLORS } from '../constants';
import { Feather } from "@expo/vector-icons"

const ExerciseCard = ({  name, duration, image, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress} 
      style={styles.container}>
        <View style={styles.leftContainer}>
            <Image
              source={image}
              resizeMode='cover'
              style={styles.image}
            />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.duration}>{duration}</Text>
            </View>
        </View>
        <TouchableOpacity>
           <Feather name="info" size={24} color="#CAD0D8" />
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
        marginBottom: 12,
        backgroundColor: COLORS.white
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        height: 61.6,
        width: 61.6,
        borderRadius: 7.7,
        marginRight: 12,
    },
    name: {
        fontSize: 15.4,
        color: COLORS.black,
        fontFamily: "medium",
        marginBottom: 4
    },
    duration: {
        fontSize: 14,
        fontFamily: "regular",
        color: "#404B52"
    }
})

export default ExerciseCard