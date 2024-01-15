import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from "../constants";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from 'react-native-virtualized-view';
import Button from "../components/Button";

const days = [
  { id: 'Sun', name: 'S' },
  { id: 'Mon', name: 'M' },
  { id: 'Tue', name: 'T' },
  { id: 'Wed', name: 'W' },
  { id: 'Thu', name: 'T' },
  { id: 'Fri', name: 'F' },
  { id: 'Sat', name: 'S' },
];


const WorkoutsReminder = ({ navigation }) => {
  const [selectedDays, setSelectedDays] = useState([]);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(true)
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };



  const toggleDay = (dayId) => {
    if (selectedDays.includes(dayId)) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== dayId));
    } else {
      setSelectedDays([...selectedDays, dayId]);
    }
  };

  const isDaySelected = (dayId) => selectedDays.includes(dayId);

  const getDayStyle = (dayId) => ({
    backgroundColor: isDaySelected(dayId) ? COLORS.primary : COLORS.white,
    color: isDaySelected(dayId) ? 'white' : 'black',
  });
  /**
   * 
  * Render Header
  */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Workout reminders</Text>
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
        <ScrollView>
          <Text style={styles.viewTitle}>Select the days you want to exercise</Text>
          <View style={styles.dayRow}>
            {days.map((day) => (
              <TouchableOpacity
                key={day.id}
                style={[styles.dayContainer, getDayStyle(day.id)]}
                onPress={() => toggleDay(day.id)}
              >
                <Text style={[styles.dayText, { color: getDayStyle(day.id).color }]}>{day.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.viewTitle}>Select the times you want to exercise</Text>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
              display="spinner"
              style={{
                width: SIZES.width - 32
              }}
            />
          )}
        </ScrollView>
      </View>
      <Button
        title="Create a reminder"
        filled
        style={styles.btn}
        onPress={()=>navigation.navigate("Profile")}
      />
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
  viewTitle: {
    fontSize: 19,
    fontFamily: "medium",
    color: COLORS.black,
    marginHorizontal: 32,
    textAlign: "center",
    marginVertical: 42
  },
  dayRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dayContainer: {
    width: 38,
    height: 38,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#E5E9EF",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white
  },
  dayText: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black,
  },
  btn: {
    position: "absolute",
    bottom: 42,
    right: 16,
    width: 16,
    width: SIZES.width - 32
  }
})

export default WorkoutsReminder