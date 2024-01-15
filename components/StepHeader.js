import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';

const StepHeader = ({ title, onPress }) => {
    const navigation =  useNavigation()
  return (
    <View style={styles.container}>
       <TouchableOpacity 
        onPress={()=>navigation.goBack()}
       >
          <Ionicons name="arrow-back-outline" size={24} color={COLORS.black} />
       </TouchableOpacity>
       <Text style={styles.title}>{title}</Text>
       <TouchableOpacity
        onPress={onPress}
       >
        <Text style={styles.skip}>Skip</Text>
       </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    title: {
        fontSize: 15.4,
        fontFamily: "openSansMedium",
        color: COLORS.primary
    },
    skip: {
        fontSize: 15.4,
        fontFamily: "openSansRegular",
        color: COLORS.black
    }   
})

export default StepHeader