import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { keywords, trainings } from '../data';
import TrainingCard from '../components/TrainingCard';
import { Ionicons } from "@expo/vector-icons";
import { commonStyles } from '../styles/CommonStyles'
import Button from '../components/Button';

const TrainingsV2 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  /**
   * Render Header
   */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Trainings</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.headerIconContainer}>
          <Image
            source={icons.filter}
            resizeMode='contain'
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>
    )
  }

  // Render Search Modal box
  const renderSearchModal = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);

    const handleCategorySelection = (category) => {
      setSelectedCategory(category);
    }

    const handlePriceSelection = (price) => {
      setSelectedPrice(price);
    }

    const handleTimeSelection = (time) => {
      setSelectedTime(time)
    }

    const handleLevelSelection = (level) => {
      setSelectedLevel(level)
    }
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          onPressOut={() => setModalVisible(false)}
          activeOpacity={0.1}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            height: SIZES.height,
            width: SIZES.width,
          }}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                height: "auto",
                width: SIZES.width * 0.9,
                borderRadius: 12,
                backgroundColor: COLORS.white,
                paddingHorizontal: 12,
              }}
            >
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 12
                }}>
                <Text style={{ fontSize: 17, fontFamily: "medium" }}>Filter your search</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={commonStyles.header3Icon}
                >
                  <Ionicons
                    name="close-outline"
                    size={24}
                    color={COLORS.black}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{ fontSize: 13, fontFamily: "medium", marginBottom: 10 }}>CATEGORY</Text>
                <View style={{ flexDirection: "row", flexWrap: 'wrap', marginVertical: 13 }}>
                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedCategory === "Stretch" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleCategorySelection("Stretch")}
                  >
                    <Text style={[selectedCategory === "Stretch" && styles.checkboxText]}>Stretch</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedCategory === "Legs" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleCategorySelection("Legs")}
                  >
                    <Text style={[selectedCategory === "Legs" && styles.checkboxText]}>Legs</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedCategory === "Arms" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleCategorySelection("Arms")}
                  >
                    <Text style={[selectedCategory === "Arms" && styles.checkboxText]}>Arms</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedCategory === "Personal" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleCategorySelection("Personal")}
                  >
                    <Text style={[selectedCategory === "Personal" && styles.checkboxText]}>Personal</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedCategory === "Yoga" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleCategorySelection("Yoga")}
                  >
                    <Text style={[selectedCategory === "Yoga" && styles.checkboxText]}>Yoga</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedCategory === "Boxing" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleCategorySelection("Boxing")}
                  >
                    <Text style={[selectedCategory === "Boxing" && styles.checkboxText]}>Boxing</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedCategory === "Running" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleCategorySelection("Running")}
                  >
                    <Text style={[selectedCategory === "Running" && styles.checkboxText]}>Running</Text>
                  </TouchableOpacity>

                </View>
              </View>

              <View>
                <Text style={{ fontSize: 13, fontFamily: "medium", marginBottom: 2 }}>DURATION</Text>

                <View style={{ flexDirection: "row", marginVertical: 13 }}>
                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedTime === "10-15" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleTimeSelection("10-15")}
                  >
                    <Text style={[selectedTime === "10-15" && styles.checkboxText]}>10-15 min</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedTime === "20" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleTimeSelection("20")}
                  >
                    <Text style={[selectedTime === "20" && styles.checkboxText]}>20 min</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedTime === "30" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleTimeSelection("30")}
                  >
                    <Text style={
                      [
                        selectedTime === "30" && styles.checkboxText
                      ]
                    }>30 min</Text>
                  </TouchableOpacity>

                </View>

              </View>

              <View>
                <Text style={{ fontSize: 13, fontFamily: "medium", marginBottom: 10 }}>PRICING</Text>
                <View style={{ flexDirection: "row", marginVertical: 13 }}>
                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedPrice === "Free" && styles.selectedCheckbox
                    ]}
                    onPress={() => handlePriceSelection("Free")}
                  >
                    <Text style={[selectedPrice === "Free" && styles.checkboxText]}>Free</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedPrice === "Premium" && styles.selectedCheckbox
                    ]}
                    onPress={() => handlePriceSelection("Premium")}
                  >
                    <Text style={[selectedPrice === "Premium" && styles.checkboxText]}>Premium</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 13, fontFamily: "medium", marginBottom: 10 }}>LEVEL</Text>
                <View style={{ flexDirection: "row", marginVertical: 13 }}>
                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedLevel === "Beginner" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleLevelSelection("Beginner")}
                  >
                    <Text style={[selectedLevel === "Beginner" && styles.checkboxText]}>Beginner</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedLevel === "Medium" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleLevelSelection("Medium")}
                  >
                    <Text style={[selectedLevel === "Medium" && styles.checkboxText]}>Medium</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      selectedLevel === "Advanced" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleLevelSelection("Advanced")}
                  >
                    <Text style={[selectedLevel === "Advanced" && styles.checkboxText]}>Advanced</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Button
                title="FILTER"
                filled
                onPress={() => setModalVisible(false)}
                style={{
                  marginBottom: 12
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
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
      {renderSearchModal()}
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
  checkboxContainer: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.gray6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginBottom: 12

  },
  roundedCheckBoxContainer: {
    alignItems: "center",
    justifyContent: 'center',
    height: 48,
    width: 48,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.gray,
    marginRight: 12
  },
  selectedCheckbox: {
    backgroundColor: COLORS.primary
  },
  checkboxText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: "Sen Regular"
  },
  starContainer: {
    height: 48,
    width: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.secondaryGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6
  }
})

export default TrainingsV2