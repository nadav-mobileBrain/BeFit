import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import StepHeader from '../components/StepHeader';
import { ScrollView } from 'react-native-virtualized-view';
import Button from '../components/Button';

const Goals = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaView style={styles.area}>
       <View style={styles.container}>
          <StepHeader
            title="Step 2 of 8"
            onPress={() => navigation.navigate("SelectHeight")}
          />
          <ScrollView>
            <Text style={styles.title}>Choose main goal</Text>
            <TouchableOpacity 
              onPress={() => handleSelectOption('Lose weight')}
              style={[styles.goalsContainer,
               selectedOption === 'Lose weight' && styles.selectedgoalsContainer]}>
              <Text style={styles.goalsIcon}>👩‍⚖️</Text>
              <Text style={styles.goalsTitle}>Lose weight</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => handleSelectOption('Keep fit')}
              style={[styles.goalsContainer,
               selectedOption === 'Keep fit' && styles.selectedgoalsContainer]}>
              <Text style={styles.goalsIcon}>🍀</Text>
              <Text style={styles.goalsTitle}>Keep fit</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => handleSelectOption('Get stronger')}
              style={[styles.goalsContainer,
               selectedOption === 'Get stronger' && styles.selectedgoalsContainer]}>
              <Text style={styles.goalsIcon}>💪</Text>
              <Text style={styles.goalsTitle}>Get stronger</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => handleSelectOption('Gain muscle mass')}
              style={[styles.goalsContainer,
               selectedOption === 'Gain muscle mass' && styles.selectedgoalsContainer]}>
              <Text style={styles.goalsIcon}>🏋️</Text>
              <Text style={styles.goalsTitle}>Gain muscle mass</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.bottomContainer}>
                <Button
                  title="Start Training"
                  filled
                  style={{ width: SIZES.width - 32}}
                  onPress={()=>navigation.navigate("SelectHeight")}
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
  goalsIcon: {
    fontSize: 30
  },
  goalsTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black,
    marginLeft: 18
  },
  goalsContainer: {
    width: SIZES.width - 32,
    height: 84,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E9EF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 12
  },
  selectedgoalsContainer: {
    width: SIZES.width - 32,
    height: 84,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
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

export default Goals