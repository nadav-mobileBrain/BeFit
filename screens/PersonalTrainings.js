import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { keywords, trainings } from '../data';
import TrainingCard from '../components/TrainingCard';
import { Ionicons } from "@expo/vector-icons"
 
const PersonalTrainings = ({ navigation }) => {
  /**
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
          <Text style={styles.headerTitle}>Personal Trainings</Text>
          <TouchableOpacity
            onPress={()=>navigation.navigate("CreateWorkout1")}
          >
            <Text style={styles.createTitle}>Create</Text>
          </TouchableOpacity>
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

    // Filter trainings based on search input and selected keywords
    const filteredTrainings = trainings.filter((training) => {
      const includesKeywords = selectedKeywords.length === 0 || selectedKeywords.some((keyword) => training.level.includes(keywords.find((k) => k.id === keyword)?.name));
      const includesSearch = !search || training.name.toLowerCase().includes(search.toLowerCase());
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
        <View style={{ marginVertical: 16 }}>
          <FlatList
            data={keywords}
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
        <FlatList
          data={filteredTrainings}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={{ gap: 12 }}
          contentContainerStyle={{ gap: 12 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TrainingCard
              name={item.name}
              duration={item.duration}
              level={item.level}
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
        {renderContent()}
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
  title: {
    fontSize: 26,
    fontFamily: "semiBold",
    color: COLORS.black,
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
  headerIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.primary
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
    paddingHorizontal: 12
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

export default PersonalTrainings