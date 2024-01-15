import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { SIZES, COLORS } from "../constants"
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons"
import { useState } from "react"

const EditWorkoutCard = ({ image, name, duration })=>{
    const [time, setTime] = useState(duration) 

    const increase = ()=>{
        setTime(time+1)
    }

    const decrease = ()=>{
        if(time >= 0){
            setTime(time-1)
        }
    }
    return (
      <View style={styles.workoutCardContainer}>
         <View style={styles.workoutCardLeft}>
            <Image
                source={image}
                resizeMode='cover'
                style={styles.workoutImage}
              />
              <View>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.workoutView}>
                  <TouchableOpacity onPress={decrease}>
                  <AntDesign name="minus" size={14} color="#CAD0D8" />
                  </TouchableOpacity>
                  <Text style={styles.plus}>{"  "}{time} s{"  "}</Text>
                  <TouchableOpacity onPress={increase}>
                  <AntDesign name="plus" size={14} color="#CAD0D8" />
                  </TouchableOpacity>
                </View>
              </View>
         </View>
         <TouchableOpacity>
            <MaterialCommunityIcons
              name="delete-outline"
              size={24}
              color="#CAD0D8"
            />
         </TouchableOpacity>
      </View>
    )
  }

  const styles = StyleSheet.create({
    workoutCardContainer: {
        width: SIZES.width - 32,
        height: 78,
        backgroundColor: COLORS.white,
        paddingHorizontal: 8,
        paddingVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 8
      },
      workoutCardLeft: {
        flexDirection: "row",
        alignItems: "center"
      },
      workoutImage: {
        height: 62,
        width: 62,
        borderRadius: 7.7, 
        marginRight: 12
      },
      workoutView: {
        flexDirection: "row",
        alignItems: "center"
      },
      name: {
        fontSize: 16,
        fontFamily: "medium",
        color: COLORS.black,
        marginBottom: 8
      },
      plus: {
        fontSize: 14,
        fontFamily: "regular",
        color: COLORS.black
      }
  })
export default EditWorkoutCard