import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Octicons } from "@expo/vector-icons";
import { COLORS, SIZES } from '../constants';

const MusicProvider = ({ navigation }) => {
   /**
    * 
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
          <Text style={styles.headerTitle}>Music Provider</Text>
          <TouchableOpacity>
            <Text style={styles.createTitle}>{"   "}</Text>
          </TouchableOpacity>
      </View>
    )
  }
 
  return (
     <SafeAreaView style={styles.area}>
        <View style={styles.container}>
          {renderHeader()}
          <View>
              <Text style={styles.title}>Select your Music Provider</Text>
              <Text style={styles.description}>Listen to your favorite music while exercising. The best music streaming services include access to millions of songs.</Text>

              <View style={styles.settingsContainer}>
            <TouchableOpacity
              style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Spotify</Text>
              <View>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
             style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Apple Music</Text>
              <View>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
            </View>
          </View>
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
  viewContainer: {
    width: SIZES.width - 32,
    height: 77,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 7.7,
    justifyContent: "space-between",
    marginVertical: 8
  },
  viewRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  workoutImage: {
    height: 62,
    width: 62,
    borderRadius: 7.7
  },
  rowLeft: {
    marginLeft: 16
  },
  title: {
    fontSize: 19.24,
    color: "#0A0615",
    fontFamily: "medium",
    textAlign: "center",
    marginVertical: 22
  },
  description: {
    fontSize: 15.39,
    fontFamily: "openSansRegular",
    color: "#0B0616",
    textAlign: "center",
  },
  settingsContainer: {
    width: SIZES.width - 32,
    paddingVertical: 12,
    borderRadius: 7.7,
    backgroundColor: COLORS.white,
    marginVertical: 22
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

export default MusicProvider