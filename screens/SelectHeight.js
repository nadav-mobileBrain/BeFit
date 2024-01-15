import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import StepHeader from '../components/StepHeader';
import { ScrollView } from 'react-native-virtualized-view';
import Button from '../components/Button';

const SelectHeight = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("Feet");
  const [height, setHeight] = useState("");
  const [heightValue, setHeightValue] = useState("cm");

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    if(option === "Feet") {
      setHeightValue("Ft")
    }
    if(option === "Centimetre") {
      setHeightValue("Cm")
    }
  };

  return (
    <SafeAreaView style={styles.area}>
       <View style={styles.container}>
          <StepHeader
            title="Step 4 of 8"
            onPress={() => navigation.navigate("SelectWeight")}
          />
          <ScrollView>
            <Text style={styles.title}>Select height</Text>
            <View style={{ alignItems: "center"}}>
            <View style={styles.barContainer}>
              <TouchableOpacity 
                onPress={() => handleSelectOption('Feet')}
                style={[styles.selectItemContainer, selectedOption === "Feet" && styles.selectedSelectItemContainer]}>
                  <Text style={[styles.selectItemText, selectedOption === "Feet" && styles.selectedSelectItemText]}>Feet</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                 onPress={() => handleSelectOption('Centimetre')}
                style={[styles.selectItemContainer, selectedOption === "Centimetre" && styles.selectedSelectItemContainer]}>
                  <Text style={[styles.selectItemText, selectedOption === "Centimetre" && styles.selectedSelectItemText]}>Centimetre</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                keyboardType='numeric'
              />
              <Text style={styles.inputHeight}>{heightValue}</Text>
            </View>
            </View>
          </ScrollView>
          <View style={styles.bottomContainer}>
                <Button
                  title="Continue"
                  filled
                  style={{ width: SIZES.width - 32}}
                  onPress={()=>navigation.navigate("SelectWeight")}
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
  bottomContainer: {
    position: "absolute",
    bottom: 12,
    right: 16,
    left: 16,
  },
  barContainer: {
    height: 40,
    width: 260,
    borderRadius: 19.25,
    backgroundColor: "#F1F4F8",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 6
  },
  selectedSelectItemContainer: {
    height: 31,
    width: 116,
    borderRadius: 14,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  selectItemContainer: {
    height: 31,
    width: 116,
    borderRadius: 14,
    backgroundColor: "#F1F4F8",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedSelectItemText: {
    fontSize: 12,
    fontFamily: "bold",
    color: COLORS.black
  },
  selectItemText: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.black
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 22
  },
  input: {
    height: 62,
    width: 94,
    borderWidth: 1,
    borderColor: "#E5E9EF",
    fontSize: 26,
    fontFamily: "semiBold",
    color: COLORS.black,
    borderRadius: 8,
    paddingHorizontal: 12
  },
  inputHeight: {
    fontSize: 16,
    fontFamily: "openSansRegular",
    color: COLORS.black,
    marginLeft: 12
  }
})

export default SelectHeight