import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, FlatListComponent } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, images } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-virtualized-view'
import { Ionicons } from "@expo/vector-icons"
import SubHeader from '../components/SubHeader'
import { Categories, exercises, popularWorkouts } from '../data'
import CategoryCard from '../components/CategoryCard'
import WorkoutCard from '../components/WorkoutCard'
import ExerciseCard from '../components/ExerciseCard'

const Home = ({ navigation }) => {
    /**
     * Render Header
     */
    const renderHeader = ()=>{
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Hi, Smith</Text>
                <TouchableOpacity 
                  onPress={()=>navigation.navigate("Notification")}
                   style={styles.headerIconContainer}>
                    <Image
                      source={icons.bell}
                      resizeMode='contain'
                      style={styles.bellIcon}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    /**
     * Render Search Bar
     */
    const renderSearchBar = ()=>{
        return (
            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={24} color={COLORS.black}/>
                <TextInput
                  placeholder='Search something'
                  placeholderTextColor={COLORS.black}
                  style={styles.inputSearch}
                />
            </View>
        )
    }
    /**
     * Render banner
     */
    const renderBanner = ()=>{
        return (
            <View style={styles.bannerContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.bannerTitle}>Full Body Toning Workout</Text>
                    <Text style={styles.bannerSubtitle}>Includes circuits to work every muscle</Text>
                    <TouchableOpacity 
                       style={styles.startBtn}>
                        <Text style={styles.startBtnText}>Start Training</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightContainer}>
                    <Image
                      source={images.banner}
                      resizeMode='contain'
                      style={styles.bannerImage}
                    />
                </View>
            </View>
        )
    }

    /**
     * Render all fitness categories
     */
    const renderCategories = ()=>{
        return (
            <View>
                <SubHeader
                  title="Category"
                  onPress={()=>navigation.navigate("Category")}
                />
                <FlatList
                  data={Categories}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item)=>item.id}
                  renderItem={({ item })=>(
                    <CategoryCard
                      name={item.name}
                      icon={item.icon}
                      onPress={()=>console.log(item)}
                    />
                  )}
                />
            </View>
        )
    }

    /**
     * Render Popular Workout
     */

    const renderPopularWorkouts = ()=>{
        return (
            <View>
                <SubHeader
                  title="Popular Workouts"
                  onPress={()=>console.log("Popular Workouts")}
                />
                <Text style={styles.subHeaderTitle}>Workouts: 80</Text>
                <View style={{ marginTop: 12 }}>
                <FlatList
                  data={popularWorkouts}
                  keyExtractor={item=>item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item })=>(
                    <WorkoutCard
                      name={item.name}
                      duration={item.duration}
                      level={item.level}
                      image={item.image}
                      onPress={()=>navigation.navigate("WorkoutDetails")}
                    />
                  )}
                />
                </View>
            </View>
        )
    }

    /**
     * Render Exercises
     */

    const renderExercises = ()=>{
        return (
            <View>
                  <SubHeader
                  title="Exercises"
                  onPress={()=>navigation.navigate("AllExercises")}
                />
                <Text style={styles.subHeaderTitle}>Exercises: 210</Text>

                <View style={{ marginTop: 12 }}>
                <FlatList
                  data={exercises}
                  keyExtractor={item=>item.id}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item })=>(
                    <ExerciseCard
                        name={item.name}
                        duration={item.duration}
                        image={item.image}
                        onPress={()=>console.log(item)}
                    />
                  )}
                />
                </View>
            </View>
        )
    }
  return (
    <SafeAreaView style={styles.area}>
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderHeader()}
                {renderSearchBar()}
                {renderBanner()}
                {renderCategories()}
                {renderPopularWorkouts()}
                {renderExercises()}
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

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
        width: SIZES.width - 32,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    bellIcon: {
        height: 24,
        width: 24,
        tintColor: COLORS.primary
    },
    headerIconContainer: {
        height: 38.5,
        width: 38.5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7.7,
        borderColor: "#E5E9EF",
        borderWidth: 1
    },
    headerTitle: {
        fontSize: 26,
        fontFamily: "semiBold",
        color: COLORS.black
    },
    searchContainer: {
        width: SIZES.width - 32,
        height: 46.2,
        borderRadius: 7.7,
        borderColor: "#DAE0E8",
        borderWidth: 1,
        marginTop: 20,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12
    },
    inputSearch: {
        fontSize: 12,
        fontFamily: "regular",
        color: COLORS.black,
        marginLeft: 8
    },
    bannerContainer: {
        width: SIZES.width - 32,
        height: 208,
        borderRadius: 12,
        backgroundColor: "#FFCCDD",
        flexDirection: "row"
    },
    leftContainer: {
        marginVertical: 18,
        marginLeft: 18
    },
    rightContainer: {
        flex: 1
    },
    bannerTitle: {
        fontSize: 19.25,
        fontFamily: "medium",
        color: COLORS.black,
        width: 194
    },
    bannerSubtitle: {
        fontSize: "regular",
        color: COLORS.black,
        fontSize: 14,
        width: 167,
        marginVertical: 18
    },
    startBtn: {
        width: 134,
        height: 34,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary
    },
    startBtnText: {
        fontSize: 12,
        fontFamily: "medium",
        color: COLORS.white
    },
    bannerImage: {
        width: 190,
        height: 218,
        bottom: 10,
        right: 42
    },
    subHeaderTitle: {
        fontSize: 12,
        color: COLORS.black,
        fontFamily: "openSansRegular"
    }
})
export default Home