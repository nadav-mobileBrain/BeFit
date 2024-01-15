import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PageContainer from '../components/PageContainer';
import Button from '../components/Button';
import Onboarding1Styles from '../styles/OnboardingStyles';
import { COLORS, SIZES, illustrations } from '../constants';
import PremiumItem from '../components/PremiumItem';

const Premium = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };


  return (
    <View style={Onboarding1Styles.container}>
      <PageContainer>
        <View style={Onboarding1Styles.contentContainer}>
          <Image
            source={illustrations.onboarding4}
            resizeMode="contain"
            style={[Onboarding1Styles.illustration, styles.illustration]}/>
          <View style={[Onboarding1Styles.buttonContainer, styles.bottomContainer ]}>
            <Text style={styles.title}>Millions of Users’ Choice</Text>
            <Text style={styles.subtitle}>We believe that our app should inspire you to be the best version of yourself</Text>
            <View style={{ marginVertical: 12 }}>
              <PremiumItem content="Professional videos with coatches" />
              <PremiumItem content="Over 100 ready-made workouts" />
              <PremiumItem content="Create your personal training plan" />
              <PremiumItem content="Without advertising" />
            </View>
            <View style={styles.menbershipContainer}>
            <TouchableOpacity
              style={[styles.option, selectedOption === 'monthly' && styles.selectedOption]}
              onPress={() => handleSelectOption('monthly')}>
              <Text style={selectedOption === 'monthly' ? styles.selectedDuration : styles.duration}>Monthly</Text>
              <Text style={ selectedOption === 'monthly' ? styles.selectedPrice : styles.price}> 5,99$</Text>
              <Text style={selectedOption === 'monthly' ? styles.selectedDurationText : styles.durationText}>per month</Text>
            </TouchableOpacity>
            <View>
              <View style={styles.saveBtn}>
                <Text style={styles.saveText}>Save 70%</Text>
              </View>
            <TouchableOpacity
              style={[styles.option, selectedOption === 'yearly' && styles.selectedOption]}
              onPress={() => handleSelectOption('yearly')}>
              <Text style={selectedOption === 'yearly' ? styles.selectedDuration : styles.duration}>Yearly</Text>
              <Text style={ selectedOption === 'yearly' ? styles.selectedPrice : styles.price}>39,99$</Text>
              <Text style={selectedOption === 'yearly' ? styles.selectedDurationText : styles.durationText}>per year</Text>
            </TouchableOpacity>
            </View>
            </View>
            <Button
              title="Continue"
              filled
              onPress={() => navigation.navigate('Signup')}
              style={Onboarding1Styles.nextButton}
            />
            <Text style={styles.bottomText}>Eget nunc scelerisque viverra mauris in aliquam sem fringilla </Text>
          </View>
        </View>
      </PageContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    height: 519
  },
  illustration: {
    bottom: 300
  },
  title: {
    fontSize: 26,
    fontFamily: "semiBold",
    color: COLORS.black
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "openSansRegular",
    color: COLORS.black,
    marginVertical: 6
  },
  option: {
    width: SIZES.width/2 - 46,
    height: 100,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E5E9EF",
    borderWidth: .6
  },
  selectedOption: {
    width: SIZES.width/2 - 46,
    height: 100,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.primary,
    borderWidth: .6
  },
  menbershipContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  selectedDuration: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.primary
  },
  duration: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black
  },
  price: {
    fontSize: 19.25,
    fontFamily: "semiBold",
    color: COLORS.black
  },
  selectedPrice: {
    fontSize: 19.25,
    fontFamily: "semiBold",
    color: COLORS.primary
  },
  durationText: {
    fontSize: 11.55,
    color: "#404B52",
    fontFamily: "openSansRegular"
  },
  selectedDurationText: {
    fontSize: 11.55,
    color: "#404B52",
    fontFamily: "openSansRegular"
  },
  saveBtn: {
    width: 60,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    position: "absolute",
    right: 12,
    top: -8,
    zIndex: 999
  },
  saveText: {
    fontSize: 7.7,
    fontFamily: "medium",
    color: COLORS.white
  },
  bottomText: {
    fontSize: 10,
    color: "#404B52",
    fontFamily: "regular",
    textAlign: "center",
    marginTop: 10,
  }
})

export default Premium;