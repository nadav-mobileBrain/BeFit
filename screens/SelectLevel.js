import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import StepHeader from '../components/StepHeader';
import { ScrollView } from 'react-native-virtualized-view';
import Button from '../components/Button';

const SelectLevel = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaView style={styles.area}>
       <View style={styles.container}>
          <StepHeader
            title="Step 6 of 8"
            onPress={() => navigation.navigate("SelectActivities")}
          />
          <ScrollView>
            <Text style={styles.title}>Choose training level</Text>
            <TouchableOpacity 
              onPress={() => handleSelectOption('Beginner')}
              style={[styles.levelContainer,
               selectedOption === 'Beginner' && styles.selectedlevelContainer]}>
              <Text style={styles.levelTitle}>Beginner</Text>
              <Text style={styles.levelSubtitle}>I want to start training</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => handleSelectOption('Irregular training')}
              style={[styles.levelContainer,
               selectedOption === 'Irregular training' && styles.selectedlevelContainer]}>
              <Text style={styles.levelTitle}>Irregular training</Text>
              <Text style={styles.levelSubtitle}>I train 1-2 times a week</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => handleSelectOption('Medium')}
              style={[styles.levelContainer,
               selectedOption === 'Medium' && styles.selectedlevelContainer]}>
              <Text style={styles.levelTitle}>Medium</Text>
              <Text style={styles.levelSubtitle}>I train 3-5 times a week</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => handleSelectOption('Advanced')}
              style={[styles.levelContainer,
               selectedOption === 'Advanced' && styles.selectedlevelContainer]}>
              <Text style={styles.levelTitle}>Advanced</Text>
              <Text style={styles.levelSubtitle}>I train more than 5 times a week</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.bottomContainer}>
                <Button
                  title="Continue"
                  filled
                  style={{ width: SIZES.width - 32}}
                  onPress={()=>navigation.navigate("SelectActivities")}
                />
            </View>
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
    marginVertical: 32,
    textAlign: "center"
  },
  levelTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black
  },
  levelSubtitle: {
    fontSize: 13,
    fontFamily: "openSansRegular",
    color: COLORS.black,
  },
  levelContainer: {
    width: SIZES.width - 32,
    height: 84,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E9EF",
    flexDirection: "column",
    paddingHorizontal: 16,
    marginVertical: 12,
    justifyContent: "center"
  },
  selectedlevelContainer: {
    width: SIZES.width - 32,
    height: 84,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginVertical: 12
  },
  bottomContainer: {
    position: "absolute",
    bottom: 12,
    right: 16,
    left: 16,
  }
})

export default SelectLevel