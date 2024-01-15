import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../constants'
import { ScrollView } from 'react-native-virtualized-view'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CircularView from '../components/CircularView'
import StatsRateChart from '../components/StatsRateChart'
import SleepBarChart from '../components/SleepBarChart'

const DayBox = ({ item, onPress, isSelected }) => (
  <TouchableOpacity onPress={() => onPress(item)} style={[styles.box, isSelected && styles.selectedBox]}>
    <Text style={[styles.day, isSelected && styles.selectedDay]}>{item.day}</Text>
    <Text style={[styles.month, isSelected && styles.selectedMonth]}>{item.month}</Text>
  </TouchableOpacity>
);

const Activity = () => {
  /**
   * Render header
   */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Activity</Text>
        <TouchableOpacity
          style={styles.headerIcon}>
          <MaterialCommunityIcons
            name="shape-square-plus"
            size={24}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
    )
  }

  /**
   * Render content
   */
  const renderContent = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const days = Array.from({ length: 10 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - index);
      return {
        day: date.getDate(),
        month: date.toLocaleString('default', { month: 'short' }),
        date: date.toISOString(),
      };
    });

    const renderItem = ({ item }) => (
      <DayBox
        item={item}
        onPress={(selectedItem) => setSelectedDate(selectedItem)}
        isSelected={selectedDate && selectedDate.day === item.day}
      />
    );


    return (
      <View>
        <View style={{ marginVertical: 8 }}>
          <FlatList
            data={days}
            keyExtractor={(item) => item.date}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.viewContainer}>
            <TouchableOpacity
              style={styles.viewLeft}>
              <View
                style={styles.viewTopContainer}>
                <Text style={styles.viewTopLeft}>Steps</Text>
                <View style={styles.viewTopRightContainer}>
                  <Text style={styles.viewTopRight}>👟</Text>
                </View>
              </View>
              <CircularView
                percentage={75}
                radius={48}
                name="Steps"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.viewRight}>
              <View
                style={styles.viewTopContainer}>
                <Text style={styles.viewTopLeft}>Heart rate</Text>
                <View style={[
                  styles.viewTopRightContainer,
                  { backgroundColor: "#FFEAEA" }
                ]}>
                  <Text style={styles.viewTopRight}>❤️</Text>
                </View>
              </View>
              <StatsRateChart />
              <View style={styles.rateContainer}>
                <Text style={styles.rateNum}>120</Text>
                <Text style={styles.rateText}>{" "}bmp</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.viewContainer}>
            <View style={{
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <TouchableOpacity
                style={[styles.viewLeft, { height: 72 }]}>
                <View
                  style={styles.viewTopContainer}>
                  <Text style={styles.viewTopLeft}>Training</Text>
                  <View style={styles.viewTopRightContainer}>
                    <Text style={styles.viewTopRight}>💪</Text>
                  </View>
                </View>
                <View style={styles.rateContainer}>
                  <Text style={styles.rateNum}>120</Text>
                  <Text style={styles.rateText}>{" "}minutes</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.viewLeft, { height: 72 }]}>
                <View
                  style={styles.viewTopContainer}>
                  <Text style={styles.viewTopLeft}>Distance</Text>
                  <View style={[styles.viewTopRightContainer,
                  { backgroundColor: "#FFEAEA" }]}>
                    <Text style={styles.viewTopRight}>🚗</Text>
                  </View>
                </View>
                <View style={styles.rateContainer}>
                  <Text style={styles.rateNum}>55</Text>
                  <Text style={styles.rateText}>{" "}minutes</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.viewRight}>
              <View
                style={styles.viewTopContainer}>
                <Text style={styles.viewTopLeft}>Calories</Text>
                <View style={[
                  styles.viewTopRightContainer,
                  { backgroundColor: "#FFEAEA" }
                ]}>
                  <Text style={styles.viewTopRight}>🔥</Text>
                </View>
              </View>
              <CircularView
                percentage={89}
                radius={48}
                name="Kcal"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.viewContainer}>
            <TouchableOpacity
              style={[styles.viewRight, { width: SIZES.width - 32, }]}>
              <View
                style={styles.viewTopContainer}>
                <Text style={styles.viewTopLeft}>Sleep</Text>
                <View style={[
                  styles.viewTopRightContainer,
                  { backgroundColor: "#EFF7FF" }
                ]}>
                  <Text style={styles.viewTopRight}>💤</Text>
                </View>
              </View>
              <SleepBarChart />
              <View style={styles.rateContainer}>
                <Text style={styles.rateNum}>7.5</Text>
                <Text style={styles.rateText}>{" "}hours</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <ScrollView>
          {renderHeader()}
          {renderContent()}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

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
    fontSize: 26,
    fontFamily: "semiBold",
    color: COLORS.black
  },
  headerIcon: {
    height: 38.54,
    width: 38.54,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    borderRadius: 7.7
  },
  box: {
    height: 70,
    width: 62,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white
  },
  selectedBox: {
    backgroundColor: COLORS.primary,
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedDay: {
    color: COLORS.white,
  },
  month: {
    fontSize: 14,
  },
  selectedMonth: {
    color: COLORS.white,
  },
  viewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12
  },
  viewLeft: {
    width: SIZES.width / 2 - 24,
    height: 162,
    borderRadius: 7.7,
    backgroundColor: COLORS.white,
    paddingHorizontal: 6,
    paddingVertical: 6
  },
  viewRight: {
    width: SIZES.width / 2 - 24,
    height: 162,
    borderRadius: 7.7,
    backgroundColor: COLORS.white,
    paddingHorizontal: 6,
    paddingVertical: 6
  },
  viewTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    slignItems: "center",
  },
  viewTopLeft: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.black,
  },
  viewTopRightContainer: {
    height: 32,
    width: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFF7FF",
    borderRadius: 7.7
  },
  viewTopRight: {
    fontSize: 16
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rateNum: {
    fontSize: 20,
    fontFamily: "medium",
    color: COLORS.black
  },
  rateText: {
    color: "#9299A3",
    fontFamily: "medium",
    fontSize: 12
  }
})
export default Activity