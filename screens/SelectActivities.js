import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import StepHeader from '../components/StepHeader';
import { ScrollView } from 'react-native-virtualized-view';
import Button from '../components/Button';
import { Ionicons, Feather } from "@expo/vector-icons"

const SelectActivities = ({ navigation }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    
  const handleSelectOption = (option) => {
    let updatedSelection = [...selectedOptions];

    // If the option is already selected, remove it; otherwise, add it to the selection
    if (updatedSelection.includes(option)) {
      updatedSelection = updatedSelection.filter((item) => item !== option);
    } else {
      updatedSelection.push(option);
    }

    setSelectedOptions(updatedSelection);
  };

    const isOptionSelected = (option) => selectedOptions.includes(option);

  return (
    <SafeAreaView style={styles.area}>
       <View style={styles.container}>
          <StepHeader
            title="Step 7 of 8"
            onPress={() => navigation.navigate("CreatePlan")}
          />
          <ScrollView>
            <Text style={styles.title}>Choose activities that interest</Text>
            <TouchableOpacity
      onPress={() => handleSelectOption('Beginner')}
      style={[
        styles.activityContainer,
        isOptionSelected('Beginner') && styles.selectedActivityContainer,
      ]}
    >
      <View style={styles.activityLeft}>
        <View style={styles.activityIcon}>
          <Text style={styles.activityIconText}>🏃</Text>
        </View>
        <Text style={styles.activityTitle}>Cardio</Text>
      </View>
      <View>
        {
            isOptionSelected('Beginner') ? (
                <Ionicons 
                name="checkmark-circle-sharp" 
                size={24} 
                color={isOptionSelected('Beginner') ?  COLORS.primary : "#DAE0E8"}
                 />
            ) : (
                <Feather
                name='circle'
                size={19.25}
                color={isOptionSelected('Beginner') ?  COLORS.primary : "#DAE0E8"}
              />
            )
        }
       
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => handleSelectOption('Power training')}
      style={[
        styles.activityContainer,
        isOptionSelected('Power training') && styles.selectedActivityContainer,
      ]}
    >
      <View style={styles.activityLeft}>
        <View style={styles.activityIcon}>
          <Text style={styles.activityIconText}>🏋️</Text>
        </View>
        <Text style={styles.activityTitle}>Power training</Text>
      </View>
      <View>
        {
            isOptionSelected('Power training') ? (
                <Ionicons 
                name="checkmark-circle-sharp" 
                size={24} 
                color={isOptionSelected('Power training') ?  COLORS.primary : "#DAE0E8"}
                 />
            ) : (
                <Feather
                name='circle'
                size={19.25}
                color={isOptionSelected('Power training') ?  COLORS.primary : "#DAE0E8"}
              />
            )
        }
       
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => handleSelectOption('Stretch')}
      style={[
        styles.activityContainer,
        isOptionSelected('Stretch') && styles.selectedActivityContainer,
      ]}
    >
      <View style={styles.activityLeft}>
        <View style={styles.activityIcon}>
          <Text style={styles.activityIconText}>🤸‍♀️</Text>
        </View>
        <Text style={styles.activityTitle}>Stretch</Text>
      </View>
      <View>
        {
            isOptionSelected('Stretch') ? (
                <Ionicons 
                name="checkmark-circle-sharp" 
                size={24} 
                color={isOptionSelected('Stretch') ?  COLORS.primary : "#DAE0E8"}
                 />
            ) : (
                <Feather
                name='circle'
                size={19.25}
                color={isOptionSelected('Stretch') ?  COLORS.primary : "#DAE0E8"}
              />
            )
        }
       
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => handleSelectOption('Dancing')}
      style={[
        styles.activityContainer,
        isOptionSelected('Dancing') && styles.selectedActivityContainer,
      ]}
    >
      <View style={styles.activityLeft}>
        <View style={styles.activityIcon}>
          <Text style={styles.activityIconText}>💃</Text>
        </View>
        <Text style={styles.activityTitle}>Dancing</Text>
      </View>
      <View>
        {
            isOptionSelected('Dancing') ? (
                <Ionicons 
                name="checkmark-circle-sharp" 
                size={24} 
                color={isOptionSelected('Dancing') ?  COLORS.primary : "#DAE0E8"}
                 />
            ) : (
                <Feather
                name='circle'
                size={19.25}
                color={isOptionSelected('Dancing') ?  COLORS.primary : "#DAE0E8"}
              />
            )
        }
       
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => handleSelectOption('Yoga')}
      style={[
        styles.activityContainer,
        isOptionSelected('Yoga') && styles.selectedActivityContainer,
      ]}
    >
      <View style={styles.activityLeft}>
        <View style={styles.activityIcon}>
          <Text style={styles.activityIconText}>🧘‍♀️</Text>
        </View>
        <Text style={styles.activityTitle}>Yoga</Text>
      </View>
      <View>
        {
            isOptionSelected('Yoga') ? (
                <Ionicons 
                name="checkmark-circle-sharp" 
                size={24} 
                color={isOptionSelected('Yoga') ?  COLORS.primary : "#DAE0E8"}
                 />
            ) : (
                <Feather
                name='circle'
                size={19.25}
                color={isOptionSelected('Yoga') ?  COLORS.primary : "#DAE0E8"}
              />
            )
        }
       
      </View>
    </TouchableOpacity>
          </ScrollView>
          <View style={styles.bottomContainer}>
                <Button
                  title="Continue"
                  filled
                  style={{ width: SIZES.width - 32}}
                  onPress={()=>navigation.navigate("CreatePlan")}
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
  activityContainer: {
    width: SIZES.width - 32,
    height: 78,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E9EF",
    flexDirection: "row",
    paddingHorizontal: 12,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "space-between"
  },
  selectedActivityContainer: {
    width: SIZES.width - 32,
    height: 78,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginVertical: 12
  },
  activityLeft: {
    flexDirection: "row",
    marginRight: 22,
    alignItems: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 12,
    right: 16,
    left: 16,
  },
  activityIcon: {
    height: 54,
    width: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7.7,
    backgroundColor: "#FFEAEA"
  },
  activityIconText: {
    fontSize: 24
  },
  activityTitle: {
    fontSize: 15.4,
    fontFamily: "medium",
    color: COLORS.black,
    marginLeft: 12
  }
})

export default SelectActivities