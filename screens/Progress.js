import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Entypo } from "@expo/vector-icons";
import { ScrollView } from 'react-native-virtualized-view';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import WeightStats from '../components/WeightStats';
import CaloriesStats from '../components/CaloriesStats';
import { useNavigation } from '@react-navigation/native';

const weekProgress = ({ })=>{
  const navigation = useNavigation();
  
  return (
    <ScrollView 
       showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          <View style={styles.subContainer}>
            <Text style={styles.subLeft}>Weight tracking</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("WeightHistoryDetails")}>  
            <Text style={styles.subRight}>History</Text>
            </TouchableOpacity>
          </View>
          <WeightStats/>
        </View>
        <View style={styles.cardContainer}>
            <View style={styles.subContainer}>
            <Text style={styles.subLeft}>Calories burned</Text>
            <Text style={styles.subRight}></Text>
          </View>
          <CaloriesStats/>
        </View>
    </ScrollView>
  )
}

const monthProgress = ()=>{
  const navigation = useNavigation();

  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}>
     <View style={styles.cardContainer}>
       <View style={styles.subContainer}>
         <Text style={styles.subLeft}>Weight tracking</Text>
         <TouchableOpacity onPress={()=>navigation.navigate("WeightHistoryDetails")}>  
            <Text style={styles.subRight}>History</Text>
          </TouchableOpacity>
       </View>
       <WeightStats/>
     </View>
     <View style={styles.cardContainer}>
         <View style={styles.subContainer}>
         <Text style={styles.subLeft}>Calories burned</Text>
         <Text style={styles.subRight}></Text>
       </View>
       <CaloriesStats/>
     </View>
 </ScrollView>
  )
}

const yearProgress = ()=>{
  const navigation = useNavigation();

  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}>
     <View style={styles.cardContainer}>
       <View style={styles.subContainer}>
         <Text style={styles.subLeft}>Weight tracking</Text>
         <TouchableOpacity onPress={()=>navigation.navigate("WeightHistoryDetails")}>  
            <Text style={styles.subRight}>History</Text>
            </TouchableOpacity>
       </View>
       <WeightStats/>
     </View>
     <View style={styles.cardContainer}>
         <View style={styles.subContainer}>
         <Text style={styles.subLeft}>Calories burned</Text>
         <Text style={styles.subRight}></Text>
       </View>
       <CaloriesStats/>
     </View>
 </ScrollView>
  )
}
const renderScene = SceneMap({
  first: weekProgress,
  second: monthProgress,
  third: yearProgress
})


const Progress = ({ navigation }) => {
  const daysOfWeek = ['S', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
  const [selectedDay, setSelectedDay] = useState(null);

  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)

  const [routes] = React.useState([
      { key: 'first', title: 'Week' },
      { key: 'second', title: 'Month' },
      { key: 'third', title: 'Year' },
  ]);

  const renderTabBar = (props) => (
    <TabBar
        {...props}
        indicatorStyle={{
            backgroundColor: "transparent",
        }}
        style={{
            backgroundColor: COLORS.white,
            borderRadius: 16
        }}
        renderLabel={({ route, focused, color }) => (
          <View style={{ 
            backgroundColor: focused ? COLORS.primary : COLORS.white ,
            width: 117,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
             borderRadius: 16
            }}>
            <Text style={[{ color: focused ? COLORS.white : 'gray' }]}>
                {route.title}
            </Text>
            </View>
        )}
    />
)


  const handleDayPress = (day) => {
    setSelectedDay(day);
    // Add any other logic you need when a day is selected
  };

  /**
   * Render Header
   */
  const renderHeader = ()=>{
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
        <Text style={styles.headerTitle}>Progress</Text>
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
        <View style={{ flex: 1 }}>
          <Text style={styles.viewTitle}>Training history</Text>
          <View style={styles.rowSchedule}>
            {daysOfWeek.map((day) => (
              <TouchableOpacity
                key={day}
                onPress={() => handleDayPress(day)}
                style={styles.scheduleContainer}
              >
                <Text style={styles.scheduleDay}>{day}</Text>
                {selectedDay === day ? (
                  <Ionicons
                    name="checkmark-circle"
                    color={COLORS.primary}
                    size={24}
                  />
                ) : (
                  <Entypo
                    name="circle"
                    color="#E5E9EF"
                    size={24}
                  />
                )}
                <Text style={styles.scheduleDate}>{new Date().getDate() + daysOfWeek.indexOf(day)}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{
             flex: 1,
              marginVertical: 16
              }}
            >
                  <TabView
                      navigationState={{ index, routes }}
                      renderScene={renderScene}
                      onIndexChange={setIndex}
                      initialLayout={{ width: layout.width }}
                      renderTabBar={renderTabBar}
                  />
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
  viewTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black,
    marginVertical: 22
  },
  scheduleContainer: {
    flexDirection: "column",
    alignItems: "center"
  },
  scheduleDate: {
    fontSize: 12,
    fontFamily: "medium",
  },
  scheduleDay: {
    fontSize: 12,
    fontFamily: "medium",
  },
  rowSchedule: {
    flexDirection: "row",
    marginVertical: 12,
    justifyContent: "space-between",
    width: SIZES.width - 32
  },
  bottomBottom: {
    marginTop: 22,
    marginBottom: 64
  },
  cardContainer: {
    width: SIZES.width - 32,
    height: 292,
    borderRadius: 7.7,
    backgroundColor: COLORS.white,
    marginTop: 22,
    padding: 16
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subLeft: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black,
  },
  subRight: {
    fontSize: 16,
    fontFamily: "regular",
    color: "#9299A3"
  }
})

export default Progress