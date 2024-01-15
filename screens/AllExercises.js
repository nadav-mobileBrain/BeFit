import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-virtualized-view'
import { Ionicons } from "@expo/vector-icons"
import { exerciseKeywords, exercises } from '../data'
import ExerciseCard from '../components/ExerciseCard'

const AllExercises = ({ navigation }) => {
  /**
 * Render Header
 */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All Exercises</Text>
        <Text>{" "}</Text>
      </View>
    )
  }

  /**
   * Render content
   */

  const renderContent = () => {
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [search, setSearch] = useState();
    const handleKeywordPress = (id) => {
      setSelectedKeywords((prevSelectedKeywords) => {
        if (prevSelectedKeywords.includes(id)) {
          // Remove keyword from the selection if already selected
          return prevSelectedKeywords.filter((keywordId) => keywordId !== id);
        } else {
          // Add keyword to the selection if not already selected
          return [...prevSelectedKeywords, id];
        }
      });
    };

    // Filter Exercises based on search input and selected keywords
    const filteredExercises = exercises.filter((exercise) => {
      const includesKeywords = selectedKeywords.length === 0 || selectedKeywords.some((keyword) => exercise.keyword.includes(exerciseKeywords.find((k) => k.id === keyword)?.name));
      const includesSearch = !search || exercise.name.toLowerCase().includes(search.toLowerCase());
      return includesKeywords && includesSearch;
    });

    const KeywordItem = ({ item, onPress, selected }) => {
      const itemStyle = {
        ...{
          paddingHorizontal: 14,
          marginHorizontal: 5,
          borderRadius: 21,
          height: 39,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: "#E5E9EF",
          borderWidth: 1
        },
        backgroundColor: selected ? COLORS.primary : COLORS.white, // Change color based on selection
      };

      return (
        <TouchableOpacity style={itemStyle} onPress={() => onPress(item.id)}>
          <Text style={{ color: selected ? COLORS.white : COLORS.black }}>{item.name}</Text>
        </TouchableOpacity>
      );
    };


    return (
      <View>
        <View style={{ marginTop: 12 }}>
          <FlatList
            data={exerciseKeywords}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <KeywordItem
                item={item}
                onPress={handleKeywordPress}
                selected={selectedKeywords.includes(item.id)}
              />
            )}
          />
        </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity
            onPress={() => console.log("Search")}
            style={styles.searchIconContainer}>
            <Ionicons name="search-outline" size={24} color={COLORS.black} />
          </TouchableOpacity>
          <TextInput
            placeholder="Search something"
            placeholderTextColor={COLORS.black}
            value={search}
            onChangeText={(text) => setSearch(text)}
            style={styles.searchInput}
          />
        </View>
        <FlatList
          data={filteredExercises}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ExerciseCard
              name={item.name}
              duration={item.duration}
              image={item.image}
              onPress={() => console.log(item)}
            />
          )}
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
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black
  },
  searchContainer: {
    height: 46,
    alignItems: "center",
    width: SIZES.width - 32,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    borderRadius: 8,
    marginBottom: 16,
    borderColor: "#DAE0E8",
    borderWidth: 1,
    paddingHorizontal: 12,
    marginTop: 12
  },
  searchIconContainer: {
    height: 30,
    width: 30
  },
  searchIcon: {
    height: 24,
    height: 24,
    tintColor: COLORS.black
  },
  searchInput: {
    fontSize: 14,
    paddingHorizontal: 12,
    flex: 1
  },
})
export default AllExercises