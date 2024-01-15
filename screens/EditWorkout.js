import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants';
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from 'react-native-virtualized-view';
import { editWorkout } from '../data';
import EditWorkoutCard from '../components/EditWorkoutCard';
import Button from '../components/Button';

const EditWorkout = ({ navigation }) => {
   /**
   * Render Header
   */
   const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={()=>navigation.goBack()}>
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Warm-up</Text>
          <TouchableOpacity
            onPress={()=>navigation.navigate("CreateWorkout1")}
          >
            <Text style={styles.createTitle}>Add</Text>
          </TouchableOpacity>
      </View>
    )
  }
  /**
   * Render content
   */
  const renderContent = () =>{
    return (
      <View style={{ marginTop: 12}}>
          <FlatList
            data={editWorkout}
            keyExtractor={item=>item.id}
            renderItem={({ item })=>(
              <EditWorkoutCard
              image={item.image} 
              name={item.name}
              duration={item.duration}
              />
            )}
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
        <Button
          title="Save"
          filled
          onPress={()=>navigation.navigate("CreateWorkout3")}
        />
      </View>
   </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: "#F8FAFC"
  },
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 16
  },
  title: {
    fontSize: 26,
    fontFamily: "semiBold",
    color: COLORS.black,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black,
  },
  createTitle: {
    fontFamily: "openSansRegular",
    color: COLORS.primary,
    fontSize: 16,
  },
  headerIconContainer: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E5E9EF",
    borderRadius: 7.7,
    borderWidth: 1
  },
  headerIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.primary
  },
  workoutCardContainer: {
    width: SIZES.width - 32,
    height: 78,
    backgroundColor: COLORS.white,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between"
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
  }
})

export default EditWorkout