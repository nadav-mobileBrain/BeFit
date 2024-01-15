import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, images } from '../constants';
import { Ionicons } from "@expo/vector-icons"
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-virtualized-view';
import { Octicons } from "@expo/vector-icons";
import ExerciseCard from '../components/ExerciseCard';
import ResetCard from '../components/ResetCard';
import Button from '../components/Button';

const WorkoutDetails = ({ navigation }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar hidden/>
        <Image
          source={images.workoutdetails}
          resizeMode="cover"
          style={styles.coverImage}
        />
        <View style={styles.headerContainer}>
            <TouchableOpacity
             onPress={()=>navigation.goBack()}
            >
              <Ionicons
                 name="arrow-back-outline"
                 size={24}
                 color={COLORS.black}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>setIsFavourite(!isFavourite)}
            >
              <Ionicons
                 name={isFavourite ? "heart" : "heart-outline"}
                 size={24}
                 color={isFavourite ? "red" : COLORS.black}
              />
            </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.detailsContainer}>
            <Text style={styles.workoutTitle}>Upper Body Workout</Text>
            <Text style={styles.workoutDescription}>Resistance training, also known as strength training, is an essential component of any fitness routine, especially for your upper body</Text>

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
            <View style={styles.subHeader}>
              <Text style={styles.subHeaderTitle}>Equipment</Text>
              <Text style={styles.suhHeaderSubtitle}>2 Items</Text>
            </View>
            <View style={styles.equipementContainer}>
                <View style={styles.equipementCard}>
                    <Image
                      source={images.equipment}
                      resizeMode='cover'
                      style={styles.equipmentImage}
                    />
                    <Text style={styles.equipmentName}>2 Dumbells</Text>
                </View>
                <View style={styles.equipementCard}>
                    <Image
                      source={images.equipment}
                      resizeMode='cover'
                      style={styles.equipmentImage}
                    />
                    <Text style={styles.equipmentName}>Mat</Text>
                </View>
            </View>
            <View style={styles.settingsContainer}>
            <TouchableOpacity 
              onPress={()=>navigation.navigate("ScheduleWorkout")}
              style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Schedule workout</Text>
              <View>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewContainer}>
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
            <View style={{ marginVertical: 12}}>
                  <ExerciseCard
                        name="Cobra Stretch"
                        duration="0:40"
                        image={images.exercise1}
                        onPress={()=>console.log("")}
                    />
                  <ExerciseCard
                        name="Plank Ups"
                        duration="0:30"
                        image={images.exercise2}
                        onPress={()=>console.log("")}
                  />
                  <ResetCard
                        name="Rest"
                        duration="0:30"
                        onPress={()=>console.log("")}
                  />
            </View>
            <View style={styles.subHeader}>
              <Text style={[styles.subHeaderTitle, { fontSize: 14 }]}>Workout</Text>
              <Text style={styles.suhHeaderSubtitle}>3 Exercises . 2 Minutes</Text>
            </View>
            <View style={{ marginVertical: 12}}>
                  <ExerciseCard
                        name="Double Heel Tabs"
                        duration="x 20"
                        image={images.exercise3}
                        onPress={()=>console.log("")}
                    />
                  <ExerciseCard
                        name="Lung Jumps Atlernated"
                        duration="x 20"
                        image={images.exercise4}
                        onPress={()=>console.log("")}
                  />
                   <ExerciseCard
                        name="Squat jump"
                        duration="x 20"
                        image={images.exercise4}
                        onPress={()=>console.log("")}
                  />
                  <ResetCard
                        name=""
                        duration="0:30"
                        onPress={()=>console.log("")}
                  />
            </View>
            <View style={styles.subHeader}>
              <Text style={[styles.subHeaderTitle, { fontSize: 14 }]}>Stretching</Text>
              <Text style={styles.suhHeaderSubtitle}>3 Exercises . 2 Minutes</Text>
            </View>
            <View style={{ marginVertical: 12}}>
                  <ExerciseCard
                        name="Boxer Shuffle"
                        duration="x 20"
                        image={images.exercise6}
                        onPress={()=>console.log("")}
                    />
                  <ExerciseCard
                        name="Plank Reaches"
                        duration="x 20"
                        image={images.exercise7}
                        onPress={()=>console.log("")}
                  />
                  <ResetCard
                        name=""
                        duration="1:30"
                        onPress={()=>console.log("")}
                  />
            </View>
            <Button
              title="Start Workout"
              filled
              style={{ marginBottom: 24 }}
              onPress={()=>navigation.navigate("StartTraining")}
            />
        </ScrollView>
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
    width: SIZES.width/3 - 24,
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
})

export default WorkoutDetails