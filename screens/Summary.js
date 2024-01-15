import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarChart } from 'react-native-chart-kit';
import { Ionicons } from "@expo/vector-icons"
import { COLORS, SIZES, images } from "../constants"
import Button from '../components/Button';

const Summary = ({ navigation }) => {
  const data = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 32, 78],
      },
    ],
  };


  return (
    <SafeAreaView style={styles.area}>
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                  onPress={()=>navigation.goBack()}>
                   <Ionicons name="arrow-back" size={24} color={COLORS.black} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Summary</Text>
                <TouchableOpacity>
                  <Ionicons name="share-outline" size={24} color={COLORS.black} />
                </TouchableOpacity>
            </View>
            <Text style={styles.workoutTitle}>Workout</Text>
            <View style={styles.workoutContainer}>
                <Image
                  source={images.workout2}
                  resizeMode='cover'
                  style={styles.workoutImage}
                />
                <View style={{ marginLeft: 12}}>
                   <Text style={styles.workoutMiniTitle}>Bodyweight Stretch</Text>
                   <Text style={styles.workoutSubtitle}>08:30 - 09:15</Text>
                </View>
            </View>   
            <View style={styles.statsContainer}>
                <View style={styles.statsViewContainer}>
                    <View style={styles.statsView}>
                       <Text style={styles.statsViewTitle}>00:45:15</Text>
                       <Text style={styles.statsViewSubtitle}>Total time</Text>
                    </View>
                    <View>
                      <View style={{ flexDirection: "row", alignItems: "center"}}>
                      <Text style={styles.statsViewTitle}>164</Text>
                      <Text style={styles.miniTitle}>{" "} bmp</Text>
                      </View>
                      <Text style={styles.statsViewSubtitle}>Avg Heart Rate</Text>
                    </View>
                </View>
                <View style={[styles.statsViewContainer, { marginTop: 22 }]}>
                    <View style={styles.statsView}>
                    <View style={{ flexDirection: "row", alignItems: "center"}}>
                      <Text style={styles.statsViewTitle}>617</Text>
                      <Text style={styles.miniTitle}>{" "} Kcal</Text>
                      </View>
                       <Text style={styles.statsViewSubtitle}>Active Calories</Text>
                    </View>
                    <View>
                      <View style={{ flexDirection: "row", alignItems: "center"}}>
                      <Text style={styles.statsViewTitle}>640</Text>
                      <Text style={styles.miniTitle}>{" "} Kcal</Text>
                      </View>
                      <Text style={styles.statsViewSubtitle}>Total Calories</Text>
                    </View>
                </View>
            </View>

            <View style={styles.statsCard}>
                <Text style={styles.statsTitle}>Heart Rate</Text>
                <BarChart
                  data={data}
                  width={SIZES.width - 48}
                  height={200}
                  yAxisLabel=""
                  chartConfig={{
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    color: (opacity = 1) => `rgba(245, 99, 74, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                  }}
                />
            </View>
            <Button
              title="Save Workout"
              filled
              style={styles.btn}
              onPress={()=>navigation.navigate("Home")}
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
    padding: 16,
    backgroundColor: "#F8FAFC"
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black
  },
  workoutTitle: {
    fontSize: 26,
    fontFamily: "semiBold",
    color: COLORS.black,
    marginVertical: 22
  },
  workoutContainer: {
    height: 76,
    backgroundColor: COLORS.white,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: COLORS.white,
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
  },
  workoutImage: {
    height: 64,
    width: 64,
    borderRadius: 9,
  },
  workoutMiniTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black,
    marginBottom: 6
  },
  workoutSubtitle: {
    fontSize: 13.47,
    fontFamily: "openSansRegular",
    color: "#404B52"
  },
  statsContainer: {
    width: SIZES.width - 32,
    backgroundColor: COLORS.white,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginVertical: 16
  },
  statsViewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsView: {
    flexDirection: "column",
  },
  statsViewTitle: {
    fontSize: 19.24,
    color: COLORS.black,
    fontFamily: "medium"
  },
  statsViewSubtitle: {
    fontSize: 13.47,
    fontFamily: "openSansRegular",
    color: COLORS.black
  },
  miniTitle: {
    fontSize: 12,
    fontFamily: "openSansRegular",
    color: COLORS.black
  },
  statsCard: {
    width: SIZES.width - 32,
    height: 208,
    borderRadius: 9,
    backgroundColor: COLORS.white,
    padding: 16
  },
  statsTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black
  },
  btn: {
    width: SIZES.width - 32,
    position: "absolute",
    bottom: 16,
    right: 16,
    left: 16
  }
})

export default Summary