import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { AllExercises, Category, ChangeEmail, ChangePassword, CreatePlan, CreateWorkout1, CreateWorkout2, CreateWorkout3, EditWorkout, ForgotPassword, Gender, Goals, MusicProvider, MyWorkouts, Notification, Onboarding1, Onboarding2, Onboarding3, PersonalTrainings, Premium, Profile, ProfileAccount, ProfilePremium, Progress, ResetPassword, ScheduleWorkout, SelectActivities, SelectGoalWeight, SelectHeight, SelectLevel, SelectWeight, Signin, Signup, StartTraining, Summary, Trainings, TrainingsV2, Verification, WeightHistoryDetails, WorkoutDetails, WorkoutsReminder } from '../screens';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const checkIfFirstLaunch = async () => {
            try {
                const value = await AsyncStorage.getItem('alreadyLaunched')
                if (value === null) {
                    await AsyncStorage.setItem('alreadyLaunched', 'true')
                    setIsFirstLaunch(true)
                } else {
                    setIsFirstLaunch(false)
                }
            } catch (error) {
                setIsFirstLaunch(false)
            }
            setIsLoading(false) // Set loading state to false once the check is complete
        }

        checkIfFirstLaunch()
    }, [])

    if (isLoading) {
        return null // Render a loader or any other loading state component
    }

  return (
    <NavigationContainer>
            <Stack.Navigator 
              screenOptions={{ headerShown: false }}
              initialRouteName={isFirstLaunch ? 'Onboarding1' : 'Signup'}>
               <Stack.Screen name="Onboarding1" component={Onboarding1} />
               <Stack.Screen name="Onboarding2" component={Onboarding2} />
               <Stack.Screen name="Onboarding3" component={Onboarding3} />
               <Stack.Screen name="Premium" component={Premium} />
               <Stack.Screen name="Signin" component={Signin} />
               <Stack.Screen name="Signup" component={Signup} />
               <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
               <Stack.Screen name="ChangePassword" component={ChangePassword} />
               <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
               <Stack.Screen name="Gender" component={Gender} />
               <Stack.Screen name="Goals" component={Goals} />
               <Stack.Screen name="ResetPassword" component={ResetPassword} />
               <Stack.Screen name="SelectHeight" component={SelectHeight} />
               <Stack.Screen name="Verification" component={Verification} />
               <Stack.Screen name="SelectWeight" component={SelectWeight} />
               <Stack.Screen name="SelectActivities" component={SelectActivities} />
               <Stack.Screen name="SelectGoalWeight" component={SelectGoalWeight} />
               <Stack.Screen name="SelectLevel" component={SelectLevel} />
               <Stack.Screen name="CreatePlan" component={CreatePlan} />
               <Stack.Screen name="Main" component={BottomTabNavigation}/>
               <Stack.Screen name="AllExercises" component={AllExercises} />
               <Stack.Screen name="Category" component={Category}/>
               <Stack.Screen name="CreateWorkout1" component={CreateWorkout1} />
               <Stack.Screen name="CreateWorkout2" component={CreateWorkout2} />
               <Stack.Screen name="CreateWorkout3" component={CreateWorkout3} />
               <Stack.Screen name="EditWorkout" component={EditWorkout} />
               <Stack.Screen name="MusicProvider" component={MusicProvider} />
               <Stack.Screen name="MyWorkouts" component={MyWorkouts} />
               <Stack.Screen name="Notification" component={Notification}/>
               <Stack.Screen name="PersonalTrainings" component={PersonalTrainings} />
               <Stack.Screen name="ProfileAccount" component={ProfileAccount}/>
               <Stack.Screen name="ProfilePremium" component={ProfilePremium}/>
               <Stack.Screen name="Progress" component={Progress}/>
               <Stack.Screen name="ScheduleWorkout" component={ScheduleWorkout}/>
               <Stack.Screen name="StartTraining" component={StartTraining}/>
               <Stack.Screen name="Summary" component={Summary}/>
               <Stack.Screen name="Trainings" component={Trainings}/>
               <Stack.Screen name="TrainingsV2" component={TrainingsV2}/>
               <Stack.Screen name="WeightHistoryDetails" component={WeightHistoryDetails}/>
               <Stack.Screen name="WorkoutDetails" component={WorkoutDetails}/>
               <Stack.Screen name="WorkoutsReminder" component={WorkoutsReminder}/>
            </Stack.Navigator> 
     </NavigationContainer>
  )
}

export default AppNavigation