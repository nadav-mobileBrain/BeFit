import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants';
import { Octicons } from "@expo/vector-icons"

const NotificationCard = ({  name, image, time, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
        <View style={styles.viewLeft}>
            <Image
              source={image}
              resizeMode='cover'
              style={styles.exerciseImage}
            />
            <View style={{ marginLeft: 12 }}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>
        </View>
        <Octicons name="chevron-right" size={24} color="#A9B2BA" />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 32,
        borderRadius: 9,
        backgroundColor: COLORS.white,
        marginVertical: 16,
        height: 72,
        paddingHorizontal: 8
    },
    viewLeft: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 16
    },
    exerciseImage: {
        width: 63,
        height: 63,
        borderRadius: 9
    },
    name: {
        fontSize: 16,
        fontFamily: "medium",
        color: "black",
        marginBottom: 6
    },
    timeContainer: {
        width: 54,
        height: 24,
        borderRadius: 5.4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary
    },
    time: {
        fontSize: 12,
        fontFamily: "medium",
        color: COLORS.white
    }
})

export default NotificationCard