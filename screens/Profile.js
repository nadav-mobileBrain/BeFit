import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import { COLORS, SIZES, images } from '../constants';
import Button from '../components/Button';
import { Octicons } from "@expo/vector-icons"

const Profile = ({ navigation }) => {
  const [isPinLockEnabled, setIsPinLockEnabled] = useState(false);
  const [isAppleHealthEnabled, setIsAppleHealthEnabled] = useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const togglePinLockSwitch = () => {
    setIsPinLockEnabled(previousState => !previousState);
  };

  const toggleAppleHealthSwitch = () => {
    setIsAppleHealthEnabled(previousState => !previousState);
  };
  const toggleDarkModeSwitch = () => {
    setIsDarkModeEnabled(previousState => !previousState);
  };

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headerTitle}>Profile</Text>
          <View style={styles.profileContainer}>
            <Image
              source={images.avatar}
              resizeMode='contain'
              style={styles.avatar}
            />
            <Text style={styles.avatarName}>Deborah Moore</Text>
            <View style={styles.workoutData}>
              <View style={styles.workoutView}>
                <Text style={styles.viewIcon}>⚖️</Text>
                <Text style={styles.viewText}>55 kg</Text>
              </View>
              <View style={styles.workoutView}>
                <Text style={styles.viewIcon}>💃</Text>
                <Text style={styles.viewText}>167 cm</Text>
              </View>
              <View style={styles.workoutView}>
                <Text style={styles.viewIcon}>🎂</Text>
                <Text style={styles.viewText}>26 Years</Text>
              </View>
            </View>
            <Button
              title="Go Premium"
              filled
              style={styles.premiumButton}
              onPress={() => navigation.navigate("ProfilePremium")}
            />
          </View>
          <View style={styles.settingsContainer}>
            <TouchableOpacity 
              onPress={()=>navigation.navigate("ProfileAccount")}
              style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Account</Text>
              <View>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={()=>navigation.navigate("MyWorkouts")}
             style={styles.viewContainer}>
              <Text style={styles.viewLeft}>My workouts 🚀</Text>
              <View>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=>navigation.navigate("PersonalTrainings")}
              style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Personal Trainings</Text>
              <View>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>navigation.navigate("WorkoutsReminder")} 
              style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Workout reminders</Text>
              <View>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>navigation.navigate("Progress")} 
              style={styles.viewContainer}>
              <Text style={styles.viewLeft}>My Progress</Text>
              <View>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Logout</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>Settings</Text>
          <View style={styles.settingsContainer}>
          <TouchableOpacity
            onPress={()=>navigation.navigate("MusicProvider")} 
            style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Music Provider</Text>
              <View>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Preferences</Text>
              <View>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Plan Settings</Text>
              <View>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Pin Lock</Text>
              <View>
                <Switch
                  trackColor={{ false: COLORS.white, true: COLORS.primary }}
                  thumbColor={isPinLockEnabled ? COLORS.white : COLORS.white}
                  ios_backgroundColor="'#787880"
                  onValueChange={togglePinLockSwitch}
                  value={isPinLockEnabled}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Apple Health</Text>
              <View>
                <Switch
                  trackColor={{ false: COLORS.white, true: COLORS.primary }}
                  thumbColor={isAppleHealthEnabled ? COLORS.white : COLORS.white}
                  ios_backgroundColor="'#787880"
                  onValueChange={toggleAppleHealthSwitch}
                  value={isAppleHealthEnabled}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Dark Mode</Text>
              <View>
                <Switch
                  trackColor={{ false: COLORS.white, true: COLORS.primary }}
                  thumbColor={isDarkModeEnabled ? COLORS.white : COLORS.white}
                  ios_backgroundColor="'#787880"
                  onValueChange={toggleDarkModeSwitch}
                  value={isDarkModeEnabled}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Contacts Support</Text>
              <View>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  headerTitle: {
    fontSize: 26,
    fontFamily: "semiBold",
    color: COLORS.black
  },
  profileContainer: {
    alignItems: "center",
  },
  avatar: {
    height: 77,
    width: 77,
    borderRadius: 999
  },
  avatarName: {
    fontSize: 20,
    fontFamily: "medium",
    color: "black",
    marginVertical: 22
  },
  workoutData: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  workoutView: {
    width: SIZES.width / 3 - 24,
    height: 78,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    borderRadius: 7.7
  },
  viewIcon: {
    fontSize: 23
  },
  viewText: {
    fontSize: 14,
    fontFamily: "medium",
    marginTop: 4
  },
  premiumButton: {
    width: SIZES.width - 32,
    marginVertical: 18
  },
  settingsContainer: {
    width: SIZES.width - 32,
    paddingVertical: 12,
    borderRadius: 7.7,
    backgroundColor: COLORS.white
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
  }
})

export default Profile