import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, Octicons } from "@expo/vector-icons"
import { ScrollView } from 'react-native-virtualized-view';
import { COLORS, SIZES, images } from '../constants';
import ExerciseCard from '../components/ExerciseCard';
import Button from '../components/Button';

const CreateWorkout2 = ({ navigation }) => {
  /**
    * Render header
    */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            color={COLORS.black}
            size={24}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Full body workout</Text>
        <Text>{" "}</Text>
      </View>
    )
  };
  /**
   * Render content
   */
  const renderContent = () => {
    return (
      <View>
        <View style={styles.viewHeaderContainer}>
          <Text style={styles.viewHeaderTitle}>Full body workout</Text>
          <TouchableOpacity>
            <Feather name="edit-3" color="#9299A3" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.viewContainer}>
          <View style={styles.viewCard}>
            <Text style={styles.viewCardTitle}>12</Text>
            <Text style={styles.viewCardSubtitle}>Exercises</Text>
          </View>
          <View style={styles.viewCard}>
            <Text style={styles.viewCardTitle}>30:00</Text>
            <Text style={styles.viewCardSubtitle}>Time</Text>
          </View>
          <View style={styles.viewCard}>
            <Text style={styles.viewCardTitle}>260</Text>
            <Text style={styles.viewCardSubtitle}>Calorie</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.viewContainer}>
            <Text style={styles.viewLeft}>Choose Equipment</Text>
            <View style={styles.viewRight}>
              <Text style={styles.viewRightTitle}>2 Dumbells, Mat </Text>
              <Octicons name="chevron-right" size={24} color="#A9B2BA" />
            </View>
          </TouchableOpacity>
          <View style={styles.viewLine} />
          <TouchableOpacity style={styles.viewContainer}>
            <Text style={styles.viewLeft}>Choose Focus Area</Text>
            <View style={styles.viewRight}>
              <Text style={styles.viewRightTitle}>Legs, Core muscles</Text>
              <Octicons name="chevron-right" size={24} color="#A9B2BA" />
            </View>
          </TouchableOpacity>
          <View style={styles.viewLine} />
        </View>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.subHeaderTitle}>Warm-up</Text>
          <TouchableOpacity>
            <Text style={styles.subHeaderSubtitle}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 16 }}>
          <ExerciseCard
            name="Cobra Stretch"
            duration="0:30"
            image={images.exercise1}
            onPress={() => console.log("")}
          />
          <ExerciseCard
            name="Extended Side Angle"
            duration="0:30"
            image={images.exercise2}
            onPress={() => console.log("")}
          />
        </View>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.subHeaderTitle}>Workout</Text>
        </View>
        <TouchableOpacity style={styles.cardView}>
          <Text style={styles.cardViewIcon}>💪</Text>
          <Text style={styles.cardViewName}>Add Exercises</Text>
        </TouchableOpacity>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.subHeaderTitle}>Stretching</Text>
          <TouchableOpacity>
            <Text style={styles.subHeaderSubtitle}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 16 }}>
          <ExerciseCard
            name="Low Lunge"
            duration="0:30"
            image={images.exercise3}
            onPress={() => console.log("")}
          />
          <ExerciseCard
            name="Downward Dog"
            duration="0:30"
            image={images.exercise4}
            onPress={() => console.log("")}
          />
        </View>
        <Button
          title="Save & Start"
          filled
          style={styles.button}
          onPress={() => navigation.navigate("CreateWorkout3")}
        />
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        {renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderContent()}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black,
  },
  description: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: "openSansRegular",
    marginVertical: 12
  },
  viewHeaderContainer: {
    width: SIZES.width - 32,
    justifyContent: "space-between",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 12
  },
  viewHeaderTitle: {
    fontSize: 19.24,
    fontFamily: "medium",
    color: COLORS.black,
  },
  viewContainer: {
    flexDirection: "row",
    width: SIZES.width - 32,
    justifyContent: "space-between",
  },
  viewCard: {
    width: SIZES.width / 3 - 32,
    height: 78,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    flexDirection: "column",
  },
  viewCardTitle: {
    fontSize: 20,
    fontFamily: "medium",
    color: COLORS.black,
  },
  viewCardSubtitle: {
    fontSize: 14,
    fontFamily: "openSansRegular",
    color: "#404B52",
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
  subtitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black,
    marginVertical: 12
  },
  viewRightTitle: {
    fontSize: 13.46,
    fontFamily: "openSansRegular",
    color: COLORS.black,
    marginRight: 12
  },
  viewRight: {
    flexDirection: "row",
    alignItems: "center"
  },
  viewLine: {
    width: SIZES.width - 32,
    borderWidth: .8,
    borderColor: "#E5E9EF",
    marginVertical: 6
  },
  subHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subHeaderTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black
  },
  subHeaderSubtitle: {
    fontSize: 14.44,
    fontFamily: "medium",
    color: "#9299A3"
  },
  cardView: {
    width: SIZES.width - 32,
    height: 77,
    borderRadius: 7.7,
    borderWidth: .7,
    borderColor: "#E5E9EF",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    marginVertical: 12
  },
  cardViewIcon: {
    fontSize: 28,
    marginRight: 22
  },
  cardViewName: {
    fontSize: 17,
    fontFamily: "medium",
    color: COLORS.black
  },
  button: {
    marginVertical: 0,
    width: SIZES.width - 32,
  }
})

export default CreateWorkout2