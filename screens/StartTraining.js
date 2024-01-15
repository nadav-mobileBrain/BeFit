import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, images } from '../constants';
import ExerciseCard from '../components/ExerciseCard';
import { ScrollView } from 'react-native-virtualized-view';

const StartTraining = ({ navigation }) => {
  const initialDuration = 22; // Initial duration in seconds
  const [duration, setDuration] = useState(initialDuration);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        setDuration((prevDuration) => (prevDuration > 0 ? prevDuration - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handlePausePress = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  const handleFinishPress = () => {
    // Add logic for finishing the exercise
    navigation.navigate("Summary");
  };

  return (
    <SafeAreaView style={styles.area}>
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerLeft}>Exercise 5/12</Text>
        <Text style={styles.headerRight}>{formatTime(duration)}</Text>
      </View>
      <Image
        source={images.trainingImage}
        resizeMode='cover'
        style={styles.trainingImage}
      />
      <Text style={styles.duration}>{formatTime(initialDuration)}</Text>
      <Text style={styles.trainingName}>Lung Jumps Atlernated</Text>
      <Text style={styles.nextTitle}>Next exercise</Text>
      <View style={{ marginVertical: 16 }}>
        {/* Replace onPress with your logic */}
        <ExerciseCard
          name="Cobra Stretch"
          duration="0:40"
          image={images.exercise7}
          onPress={() => console.log('')}
        />
      </View>
    </ScrollView>
    <View style={styles.bottomContainer}>
      <TouchableOpacity
        style={[
          styles.btn,
          {
            backgroundColor: COLORS.white,
            borderColor: COLORS.primary,
            borderWidth: 2,
          },
        ]}
        onPress={handlePausePress}
      >
        <Text
          style={[
            styles.btnText,
            {
              color: COLORS.primary,
            },
          ]}
        >
          {isPaused ? 'Resume' : 'Pause'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={handleFinishPress}>
        <Text style={styles.btnText}>Finish</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: "#F8FAFC"
  },
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 16
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black
  },
  headerRight: {
    fontSize: 26,
    fontFamily: 'semiBold',
    color: COLORS.black
  },
  trainingImage: {
    width: SIZES.width - 32,
    height: 386,
    borderRadius: 12,
    marginVertical: 12
  },
  duration: {
    fontSize: 35,
    fontFamily: "semiBold",
    color: "black",
    textAlign: "center",
  },
  trainingName: {
    fontSize: 20,
    fontFamily: "medium",
    color: "black",
    textAlign: "center",
  },
  nextTitle: {
    fontSize: 10,
    fontFamily: "medium",
    color: "#404B52",
    marginTop: 22
  },
  bottomContainer: {
    position: "absolute",
    bottom: 36,
    right: 16,
    left: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    width: SIZES.width/2 - 24,
    height: 46,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  btnText: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.white
  }
})

export default StartTraining