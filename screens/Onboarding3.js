import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import PageContainer from '../components/PageContainer';
import DotsView from '../components/DotsView';
import Button from '../components/Button';
import Onboarding1Styles from '../styles/OnboardingStyles';
import {COLORS, illustrations, images} from '../constants';

const Onboarding3 = ({navigation}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 1) {
          clearInterval(intervalId);
          return prevProgress;
        }
        return prevProgress + 0.5;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (progress >= 1) {
      // navigate to the Premium Screen
      navigation.navigate('Premium');
    }
  }, [progress, navigation]);

  return (
    <View style={Onboarding1Styles.container}>
      <PageContainer>
        <View style={Onboarding1Styles.contentContainer}>
          <Image
            source={illustrations.onboarding3}
            resizeMode="contain"
            style={Onboarding1Styles.illustration}
          />
          <View style={Onboarding1Styles.buttonContainer}>
            <View style={Onboarding1Styles.titleContainer}>
              <Text style={[Onboarding1Styles.title]}>Organized and Custom</Text>
              <Text style={Onboarding1Styles.subTitle}>Workout</Text>
            </View>

            <Text style={Onboarding1Styles.description}>
            Create and save your own custom workouts. Name your workouts, save them, and they’ll automatically appear 
            </Text>

            <View style={Onboarding1Styles.dotsContainer}>
              {progress < 1 && <DotsView progress={progress} numDots={4} />}
            </View>
            <Button
              title="Next"
              filled
              onPress={() => navigation.navigate('Premium')}
              style={Onboarding1Styles.nextButton}
            />
            <Button
              title="Skip"
              onPress={() => navigation.navigate('Login')}
              textColor={COLORS.secondary}
              style={Onboarding1Styles.skipButton}
            />
          </View>
        </View>
      </PageContainer>
    </View>
  );
};

export default Onboarding3;