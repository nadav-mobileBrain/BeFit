import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, Image, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from '../constants';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { favouritesWorkouts, historyWorkouts, lastWorkouts } from '../data';

const HistoryWorkouts = ({ navigation })=>{
  return (
    <View>
        <FlatList
          data={historyWorkouts}
          keyExtractor={item=>item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item })=>(
            <TouchableOpacity style={styles.viewContainer}>
              <View style={styles.viewRightContainer}>
                <Image
                  source={item.image}
                  resizeMode='cover'
                  style={styles.workoutImage}
                />
                <View style={styles.rowLeft}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.timeline}>{item.startTime}-{item.lastTime}</Text>
                </View>
              </View>
              <Ionicons name="ios-checkmark-circle-sharp" size={24} color={COLORS.primary} />
            </TouchableOpacity>
          )}
        />
    </View>
  )
};

const LastWorkouts = ({ navigation })=>{
  return (
    <View>
      <FlatList
          data={lastWorkouts}
          keyExtractor={item=>item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item })=>(
            <TouchableOpacity style={styles.viewContainer}>
              <View style={styles.viewRightContainer}>
                <Image
                  source={item.image}
                  resizeMode='cover'
                  style={styles.workoutImage}
                />
                <View style={styles.rowLeft}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.timeline}>{item.startTime}-{item.lastTime}</Text>
                </View>
              </View>
              <Ionicons name="ios-checkmark-circle-sharp" size={24} color={COLORS.primary} />
            </TouchableOpacity>
          )}
        />
    </View>
  )
}

const FavouritesWorkouts = ({ navigation })=>{
  return (
    <View>
      <FlatList
          data={favouritesWorkouts}
          keyExtractor={item=>item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item })=>(
            <TouchableOpacity style={styles.viewContainer}>
              <View style={styles.viewRightContainer}>
                <Image
                  source={item.image}
                  resizeMode='cover'
                  style={styles.workoutImage}
                />
                <View style={styles.rowLeft}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.timeline}>{item.startTime}-{item.lastTime}</Text>
                </View>
              </View>
              <Ionicons name="ios-checkmark-circle-sharp" size={24} color={COLORS.primary} />
            </TouchableOpacity>
          )}
        />
    </View>
  )
};

const renderScene = SceneMap({
  first: HistoryWorkouts,
  second: LastWorkouts,
  third: FavouritesWorkouts
})

const MyWorkouts = ({ navigation }) => {
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)

  const [routes] = React.useState([
      { key: 'first', title: 'History' },
      { key: 'second', title: 'Last' },
      { key: 'third', title: 'Favorites' },
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
          <Text style={styles.headerTitle}>My workouts</Text>
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
  name: { 
    fontSize: 15.4,
    fontFamily: "medium",
    color: "black",
    marginBottom: 6
  },
  timeline: {
    fontSize: 13.5,
    fontFamily: "openSansRegular",
    color: "#404B52"
  }
})

export default MyWorkouts