import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SIZES, COLORS } from '../constants';
import { Feather } from "@expo/vector-icons"

const ResetCard = ({  name, duration, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress} 
      style={styles.container}>
        <View style={styles.leftContainer}>
             <View style={styles.image}>
                <Text style={styles.durationTitle}>00:30</Text>
             </View>
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
        height: 46,
        width: 46,
        borderRadius: 999,
        marginRight: 12,
        borderWidth: 3,
        borderColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    durationTitle: {
        fontSize: 10,
        color: COLORS.primary,
        fontFamily: "medium"
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

export default ResetCard