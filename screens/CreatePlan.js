import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import Button from '../components/Button';
import CircularPercentage from '../components/CircularPercentage';

const  CreatePlan = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.area}>
       <View style={styles.container}>
          <ScrollView contentContainerStyle={{ alignItems: "center",  width: 268}}>
            <Text style={styles.title}>We create your training plan</Text>
            <View style={{ alignItems: "center" }}>
            <CircularPercentage percentage={75} radius={120} />
            <Text style={styles.percentageTitle}>We create a workout according to demographic profile, activity level and interests</Text>
            </View>
          </ScrollView>
          <View style={styles.bottomContainer}>
                <Button
                  title="Start Training"
                  filled
                  style={{ width: SIZES.width - 32}}
                  onPress={()=>navigation.navigate("Main")}
                />
            </View>
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
    padding: 16,
    alignItems: "center"
  },
  title: {
    fontSize: 26,
    fontFamily: "semiBold",
    color: COLORS.black,
    marginVertical: 32,
    textAlign: "center"
  },
  bottomContainer: {
    position: "absolute",
    bottom: 12,
    right: 16,
    left: 16,
  },
  barContainer: {
    height: 40,
    width: 260,
    borderRadius: 19.25,
    backgroundColor: "#F1F4F8",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 6
  },
  selectedSelectItemContainer: {
    height: 31,
    width: 116,
    borderRadius: 14,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  selectItemContainer: {
    height: 31,
    width: 116,
    borderRadius: 14,
    backgroundColor: "#F1F4F8",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedSelectItemText: {
    fontSize: 12,
    fontFamily: "bold",
    color: COLORS.black
  },
  selectItemText: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.black
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 22
  },
  input: {
    height: 62,
    width: 94,
    borderWidth: 1,
    borderColor: "#E5E9EF",
    fontSize: 26,
    fontFamily: "semiBold",
    color: COLORS.black,
    borderRadius: 8,
    paddingHorizontal: 12
  },
  inputHeight: {
    fontSize: 16,
    fontFamily: "openSansRegular",
    color: COLORS.black,
    marginLeft: 12
  },
  percentageTitle: {
    fontSize: 15.4,
    fontFamily: "openSansRegular",
    color: COLORS.black,
    textAlign: "center",
    marginVertical: 22
  }
})

export default CreatePlan