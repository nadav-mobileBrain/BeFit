import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { COLORS, SIZES, images } from '../constants';
import { Ionicons } from "@expo/vector-icons"
import { StatusBar } from 'expo-status-bar';
import { Octicons, Entypo } from "@expo/vector-icons";
import ExerciseCard from '../components/ExerciseCard';
import ResetCard from '../components/ResetCard';
import Button from '../components/Button';
import RBSheet from "react-native-raw-bottom-sheet"

const ScheduleWorkout = ({ navigation }) => {
  const refRBSheet = useRef();
  const refExerciseRBInfo = useRef();
  const daysOfWeek = ['S', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDay(day);
    // Add any other logic you need when a day is selected
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image
        source={images.workoutdetails2}
        resizeMode="cover"
        style={styles.coverImage}
      />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={()=>navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.detailsContainer}>
        <Text style={styles.workoutTitle}>Strong Legs and Core</Text>
        <Text style={styles.workoutDescription}>
          Tellus pellentesque eu tincidunt tortor aliquam nulla. Feugiat nisl pretium fusce id velit ut tortor pretium. Nunc faucibus a pellentesque sit amet
        </Text>

        <View style={styles.itemViewContainer}>
          <View style={styles.itemView}>
            <Text style={styles.itemViewTitle}>⏱️</Text>
            <Text style={styles.itemViewSubtitle}>30 min</Text>
          </View>
          <View style={styles.itemView}>
            <Text style={styles.itemViewTitle}>🔥</Text>
            <Text style={styles.itemViewSubtitle}>340 Kal</Text>
          </View>
          <View style={styles.itemView}>
            <Text style={styles.itemViewTitle}>⚡</Text>
            <Text style={styles.itemViewSubtitle}>Beginner</Text>
          </View>
        </View>

        <View style={styles.settingsContainer}>
          <TouchableOpacity
            onPress={() => refExerciseRBInfo.current.open()}
            style={styles.viewContainer}>
            <Text style={styles.viewLeft}>Equipment</Text>
            <View>
              <Text style={styles.viewLeft}>2 Dumbells</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={styles.viewContainer}>
            <Text style={styles.viewLeft}>Focus Area</Text>
            <View>
              <Text style={styles.viewLeft}>Legs</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={styles.viewContainer}>
            <Text style={styles.viewLeft}>Schedule workout</Text>
            <View>
              <Octicons name="chevron-right" size={24} color="#A9B2BA" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() => refExerciseRBInfo.current.open()}
            style={styles.viewContainer}>
            <Text style={styles.viewLeft}>Pick a playlist</Text>
            <View>
              <Octicons name="chevron-right" size={24} color="#A9B2BA" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.subHeader, { marginVertical: 12 }]}>
          <Text style={styles.subHeaderTitle}>Exercises</Text>
        </View>
        <View style={styles.subHeader}>
          <Text style={[styles.subHeaderTitle, { fontSize: 14 }]}>Warm-up</Text>
          <Text style={styles.suhHeaderSubtitle}>3 Exercises . 2 Minutes</Text>
        </View>
        <View style={{ marginVertical: 12 }}>
          <ExerciseCard
            name="Cobra Stretch"
            duration="0:40"
            image={images.exercise1}
            onPress={() => console.log("")}
          />
          <ExerciseCard
            name="Plank Ups"
            duration="0:30"
            image={images.exercise2}
            onPress={() => console.log("")}
          />
          <ResetCard
            name="Rest"
            duration="0:30"
            onPress={() => console.log("")}
          />
        </View>
        <View style={styles.subHeader}>
          <Text style={[styles.subHeaderTitle, { fontSize: 14 }]}>Workout</Text>
          <Text style={styles.suhHeaderSubtitle}>3 Exercises . 2 Minutes</Text>
        </View>
        <View style={{ marginVertical: 12 }}>
          <ExerciseCard
            name="Double Heel Tabs"
            duration="x 20"
            image={images.exercise3}
            onPress={() => console.log("")}
          />
          <ExerciseCard
            name="Lung Jumps Atlernated"
            duration="x 20"
            image={images.exercise4}
            onPress={() => console.log("")}
          />
          <ExerciseCard
            name="Squat jump"
            duration="x 20"
            image={images.exercise4}
            onPress={() => console.log("")}
          />
          <ResetCard
            name=""
            duration="0:30"
            onPress={() => console.log("")}
          />
        </View>
        <View style={styles.subHeader}>
          <Text style={[styles.subHeaderTitle, { fontSize: 14 }]}>Stretching</Text>
          <Text style={styles.suhHeaderSubtitle}>3 Exercises . 2 Minutes</Text>
        </View>
        <View style={{ marginVertical: 12 }}>
          <ExerciseCard
            name="Boxer Shuffle"
            duration="x 20"
            image={images.exercise6}
            onPress={() => console.log("")}
          />
          <ExerciseCard
            name="Plank Reaches"
            duration="x 20"
            image={images.exercise7}
            onPress={() => console.log("")}
          />
          <ResetCard
            name=""
            duration="1:30"
            onPress={() => console.log("")}
          />
        </View>
        <Button
          title="Start Workout"
          filled
          style={{ marginBottom: 24 }}
          onPress={()=>navigation.navigate("StartTraining")}
        />
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={420}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            borderTopRightRadius: 32,
            borderTopLeftRadius: 32,
          }
        }}
      >
        <View style={{ padding: 16 }}>
          <Text style={styles.modalTitle}>Schedule-workout</Text>
          <View style={styles.rowSchedule}>
            {daysOfWeek.map((day) => (
              <TouchableOpacity
                key={day}
                onPress={() => handleDayPress(day)}
                style={styles.scheduleContainer}
              >
                <Text style={styles.scheduleDay}>{day}</Text>
                {selectedDay === day ? (
                  <Ionicons
                    name="checkmark-circle"
                    color={COLORS.primary}
                    size={24}
                  />
                ) : (
                  <Entypo
                    name="circle"
                    color="#E5E9EF"
                    size={24}
                  />
                )}
                <Text style={styles.scheduleDate}>{new Date().getDate() + daysOfWeek.indexOf(day)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <Button
            title="Schedule"
            filled
            style={styles.bottomBottom}
            onPress={()=>{
              refRBSheet.current.close()
            }}
          />
      </RBSheet>

      <RBSheet
        ref={refExerciseRBInfo}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={SIZES.height * .8}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            borderTopRightRadius: 32,
            borderTopLeftRadius: 32,
          }
        }}
      >
        <ScrollView style={{ padding: 16 }}>
        <TouchableOpacity activeOpacity={1}>
          <Image
            source={images.workoutdetails3}
            resizeMode='contain'
            style={styles.exerciseInfoImage}
          />
          <Text style={styles.exerciseInfoTitle}>Sumo Squat</Text>
          <Text style={styles.exerciseInfoDescription}>To further challenge yourself, try widening your stance to perform a sumo squat instead. This variation can add variety to your lower body strength training routine</Text>
          <Text style={styles.equipmentTitle}>Equipment</Text>
          <View style={styles.equipementContainer}>
                <View style={styles.equipementCard}>
                    <Image
                      source={images.equipment}
                      resizeMode='cover'
                      style={styles.equipmentImage}
                    />
                    <Text style={styles.equipmentName}>2 Dumbells</Text>
                </View>
          </View>
          <Text style={styles.equipmentTitle}>Exercise technique</Text>
          <Text style={styles.description}>1. Inhale while pushing your hips back and lowering into a squat position. Keep your core tight, back straight, and knees forward during this movement.</Text>
          <Text style={styles.description}>2. Exhale while returning to the starting position. Focus on keeping your weight evenly distributed throughout your heel and midfoot.</Text>
          <Button
            title="close"
            style={styles.closeBottomBottom}
            onPress={()=>{

              refExerciseRBInfo.current.close()
            }}
          />
          </TouchableOpacity>
        </ScrollView>
        
      </RBSheet>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  coverImage: {
    height: 261,
    width: "100%"
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 16,
    width: SIZES.width - 32,
    right: 16,
    left: 16
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: "#F8FAFC",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 30,
    top: -32
  },
  workoutTitle: {
    fontSize: 26,
    fontFamily: "semiBold",
    color: COLORS.black,
  },
  workoutDescription: {
    fontSize: 15.4,
    fontFamily: "openSansRegular",
    color: COLORS.black,
    marginVertical: 6
  },
  itemViewContainer: {
    width: SIZES.width - 32,
    justifyContent: "space-between",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 12
  },
  itemView: {
    width: SIZES.width / 3 - 24,
    height: 78,
    borderColor: "#E5E9EF",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7.7
  },
  itemViewTitle: {
    fontSize: 24
  },
  itemViewSubtitle: {
    fontSize: 12,
    fontFamily: "medium",
    color: COLORS.black
  },
  subHeader: {
    width: SIZES.width - 32,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subHeaderTitle: {
    fontSize: 19.25,
    color: COLORS.black,
    fontFamily: "medium",
  },
  suhHeaderSubtitle: {
    fontSize: 14,
    color: "#404B52",
    fontFamily: "openSansRegular",
  },
  equipementContainer: {
    marginVertical: 12,
    flexDirection: "row",
  },
  equipementCard: {
    flexDirection: "column",
    marginRight: 16
  },
  equipmentImage: {
    width: 102,
    height: 76,
    borderRadius: 7.7
  },
  equipmentName: {
    fontSize: 15.4,
    color: COLORS.black,
    fontFamily: "openSansRegular",
    marginTop: 6
  },
  settingsContainer: {
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderRadius: 9
  },
  viewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    marginVertical: 12
  },
  viewLeft: {
    fontSize: 16,
    fontFamily: "regular",
    color: COLORS.black
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "medium",
    color: COLORS.black,
    textAlign: "center"
  },
  scheduleContainer: {
    flexDirection: "column",
    alignItems: "center"
  },
  scheduleDate: {
    fontSize: 12,
    fontFamily: "medium",
  },
  scheduleDay: {
    fontSize: 12,
    fontFamily: "medium",
  },
  rowSchedule: {
    flexDirection: "row",
    marginVertical: 12,
    justifyContent: "space-between",
    width: SIZES.width - 32
  },
  bottomBottom: {
    marginTop: 22,
    marginBottom: 64,
    width: SIZES.width - 32,
    marginLeft: 16,
    marginRight: 16
  },
  closeBottomBottom: {
    marginTop: 22,
    marginBottom: 64,
    width: "100%",
  },
  exerciseInfoImage: {
    width: SIZES.width - 32,
    height: 292,
    borderRadius: 16
  },
  exerciseInfoTitle: {
    fontSize: 26,
    fontFamily: "semiBold",
    color: COLORS.black,
    marginVertical: 12
  },
  exerciseInfoDescription: {
    fontSize: 15.4,
    fontFamily: "openSansRegular",
    color: COLORS.black
  },
  equipmentTitle: {
    fontSize: 20,
    fontFamily: "medium",
    color: COLORS.black,
    marginTop: 12
  },
  description: {
    fontSize: 15.4,
    fontFamily: "openSansRegular",
    color: COLORS.black,
    marginTop: 12
  }
})

export default ScheduleWorkout