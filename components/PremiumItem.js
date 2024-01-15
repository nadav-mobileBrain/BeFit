import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from '../constants'

const PremiumItem = ({ content }) => {
  return (
    <View style={styles.container}>
       <Ionicons name="checkmark-circle" size={24} color={COLORS.primary} />
       <Text style={styles.content}>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 2
    },
    content: {
        fontSize: 14,
        fontFamily: "openSansRegular",
        color: COLORS.black,
        marginLeft: 12
    }
})

export default PremiumItem