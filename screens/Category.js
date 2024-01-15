import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons"
import { ScrollView } from 'react-native-virtualized-view';
import { workoutCategories } from '../data';
import CatgeoryItem from '../components/CatgeoryItem';

const Category = ({ navigation }) => {
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
        <Text style={styles.headerTitle}>Category</Text>
        <Text>{" "}</Text>
      </View>
    )
  }

  /***
   * Render content
   */
  const renderContent = () => {
    const [search, setSearch] = useState('');

    // Filter the workout categories based on the search input
    const filteredCategories = workoutCategories.filter((category) =>
      category.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <View>
        <View style={styles.searchContainer}>
          <TouchableOpacity
            onPress={() => console.log('Search')}
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
          data={filteredCategories} // Use the filtered list for rendering items
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CatgeoryItem
              onPress={() => console.log(item)}
              icon={item.icon}
              color={item.color}
              numWorkouts={item.numWorkouts}
              name={item.name}
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
        <ScrollView>
          {renderContent()}
        </ScrollView>
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
    marginVertical: 18
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

export default Category