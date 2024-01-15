import { View, Text, StyleSheet, TouchableOpacity, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Octicons } from "@expo/vector-icons"
import { ScrollView } from 'react-native-virtualized-view';
import Button from '../components/Button';

const CreateWorkout1 = ({ navigation }) => {
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
        <Text style={styles.headerTitle}>Custom Workout</Text>
        <Text>{" "}</Text>
      </View>
    )
  };

  /**
   * Render content
   */
  const renderContent = () => {
    const [workoutName, setWorkoutName] = useState();
    const [selectedOption, setSelectedOption] = useState(null);
    const [isIncludeWarmupEnabled, setIncludeWarmupEnabled] = useState(true);
    const [isIncludesStretchingEnabled, setIsIncludesStretchingEnabled] = useState(true);


    const toggleIncludeWarmupSwitch = () => {
      setIncludeWarmupEnabled(previousState => !previousState);
    };

    const toggleIncludesStretchingSwitch = () => {
      setIsIncludesStretchingEnabled(previousState => !previousState);
    };

    const handleSelectOption = (option) => {
      setSelectedOption(option);
    };

    return (
      <View>
        <Text style={styles.description}>Log each workout you complete to keep track of tour fitness program!</Text>
        <TextInput
          placeholder='Workout name'
          placeholderTextColor={COLORS.black}
          style={styles.input}
          onChangeText={(value) => setWorkoutName(value)}
        />
        <Text style={styles.levelBigTitle}>Choose Level</Text>
        <View>
          <TouchableOpacity
            onPress={() => handleSelectOption('Beginner')}
            style={[styles.levelContainer,
            selectedOption === 'Beginner' && styles.selectedlevelContainer]}>
            <Text style={styles.levelTitle}>Beginner</Text>
            <Text style={styles.levelSubtitle}>I want to start training</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSelectOption('Irregular training')}
            style={[styles.levelContainer,
            selectedOption === 'Irregular training' && styles.selectedlevelContainer]}>
            <Text style={styles.levelTitle}>Irregular training</Text>
            <Text style={styles.levelSubtitle}>I train 1-2 times a week</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSelectOption('Medium')}
            style={[styles.levelContainer,
            selectedOption === 'Medium' && styles.selectedlevelContainer]}>
            <Text style={styles.levelTitle}>Medium</Text>
            <Text style={styles.levelSubtitle}>I train 3-5 times a week</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSelectOption('Advanced')}
            style={[styles.levelContainer,
            selectedOption === 'Advanced' && styles.selectedlevelContainer]}>
            <Text style={styles.levelTitle}>Advanced</Text>
            <Text style={styles.levelSubtitle}>I train more than 5 times a week</Text>
          </TouchableOpacity>
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
          <TouchableOpacity style={styles.viewContainer}>
            <Text style={styles.viewLeft}>Includes Warm-Up</Text>
            <View>
              <Switch
                trackColor={{ false: COLORS.white, true: COLORS.primary }}
                thumbColor={isIncludeWarmupEnabled ? COLORS.white : COLORS.white}
                ios_backgroundColor="'#787880"
                onValueChange={toggleIncludeWarmupSwitch}
                value={isIncludeWarmupEnabled}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.viewLine} />
          <TouchableOpacity style={styles.viewContainer}>
            <Text style={styles.viewLeft}>Includes Stretching</Text>
            <View>
              <Switch
                trackColor={{ false: COLORS.white, true: COLORS.primary }}
                thumbColor={isIncludesStretchingEnabled ? COLORS.white : COLORS.white}
                ios_backgroundColor="'#787880"
                onValueChange={toggleIncludesStretchingSwitch}
                value={isIncludesStretchingEnabled}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Button
          title="Create Workout"
          filled
          onPress={() => navigation.navigate("CreateWorkout2")}
          style={styles.btn}
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
  input: {
    height: 54,
    width: SIZES.width - 32,
    borderRadius: 7.7,
    borderWidth: 1,
    borderColor: "#DAE0E8",
    paddingHorizontal: 12
  },
  levelBigTitle: {
    fontSize: 19,
    fontFamily: "medium",
    color: COLORS.black,
    marginVertical: 12
  },
  levelTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black
  },
  levelSubtitle: {
    fontSize: 13,
    fontFamily: "openSansRegular",
    color: COLORS.black,
  },
  levelContainer: {
    width: SIZES.width - 32,
    height: 84,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E9EF",
    flexDirection: "column",
    paddingHorizontal: 16,
    marginVertical: 8,
    justifyContent: "center"
  },
  selectedlevelContainer: {
    width: SIZES.width - 32,
    height: 84,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginVertical: 8
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
  btn: {
    width: SIZES.width - 32,
    marginVertical: 22
  }
})
export default CreateWorkout1