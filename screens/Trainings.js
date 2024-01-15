import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { keywords, trainings } from '../data';
import TrainingCard from '../components/TrainingCard';

const Trainings = () => {
  /**
   * Render content
   */
  const renderContent = ()=>{
    const [selectedKeywords, setSelectedKeywords] = useState([]);
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
        backgroundColor: selected ? COLORS.primary : COLORS.white , // Change color based on selection
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
        data={trainings}
        keyExtractor={item=>item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ gap: 12 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item })=>(
          <TrainingCard
            name={item.name}
            duration={item.duration} 
            level={item.level} 
            image={item.image} 
            onPress={()=>console.log(item)}
          />
        )}
      />
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.area}>
        <View style={styles.container}>
            <Text style={styles.title}>Trainings</Text>
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
  }
})

export default Trainings