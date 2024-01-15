import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import StepHeader from '../components/StepHeader';
import { ScrollView } from 'react-native-virtualized-view';
import Button from '../components/Button';

const Gender = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaView style={styles.area}>
       <View style={styles.container}>
          <StepHeader
            title="Step 1 of 8"
            onPress={() => navigation.navigate("Goals")}
          />
          <ScrollView>
            <Text style={styles.title}>Choose gender</Text>
            <TouchableOpacity 
              onPress={() => handleSelectOption('woman')}
              style={[styles.genderContainer,
               selectedOption === 'woman' && styles.selectedGenderContainer]}>
              <Text style={styles.genderIcon}>👩</Text>
              <Text style={styles.genderTitle}>Woman</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => handleSelectOption('man')}
              style={[styles.genderContainer,
               selectedOption === 'man' && styles.selectedGenderContainer]}>
              <Text style={styles.genderIcon}>👨</Text>
              <Text style={styles.genderTitle}>Man</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => handleSelectOption('neutral')}
              style={[styles.genderContainer,
               selectedOption === 'neutral' && styles.selectedGenderContainer]}>
              <Text style={styles.genderIcon}>🧓</Text>
              <Text style={styles.genderTitle}>Gender neutral</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.bottomContainer}>
                <Button
                  title="Continue"
                  filled
                  style={{ width: SIZES.width - 32}}
                  onPress={()=>navigation.navigate("Goals")}
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
  genderIcon: {
    fontSize: 30
  },
  genderTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black,
    marginLeft: 18
  },
  genderContainer: {
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
  selectedGenderContainer: {
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

export default Gender