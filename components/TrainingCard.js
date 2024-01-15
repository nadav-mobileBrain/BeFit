import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SIZES, COLORS } from '../constants';
import { Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

const TrainingCard = ({  name , duration, level, image, onPress }) => {
    const [isFavourite, setIsFavourite] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
     >
        <TouchableOpacity
          style={styles.favouriteContainer}
          onPress={()=>setIsFavourite(!isFavourite)}>
            <Ionicons
              name={isFavourite ? "heart" : "heart-outline"}
              color={COLORS.white}
              size={20}
            />
        </TouchableOpacity>
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
};

const styles = StyleSheet.create({
    container: {
        width: SIZES.width / 2 -  24,
        height: 162,
        flexDirection: "column",
    },
    image: {
        height: 116,
        width: "100%",
        borderRadius: 7.7
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
    },
    favouriteContainer: {
        position: "absolute",
        zIndex: 999,
        right: 8,
        top: 8
    }
})

export default TrainingCard