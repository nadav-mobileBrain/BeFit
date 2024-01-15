import { View, Text, Alert, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Checkbox from 'expo-checkbox'
import Input from '../components/Input'
import Button from '../components/Button'
import { reducer } from '../utils/reducers/formReducers'
import { validateInput } from '../utils/actions/formActions'
import { COLORS, SIZES, icons } from '../constants'
import SocialButton from '../components/SocialButton';

const isTestMode = true

const initialState = {
  inputValues: {
    fullName: isTestMode ? 'fullName' : '',
    phoneNumber: isTestMode ? 'phoneMumber' : '',
    email: isTestMode ? 'example@gmail.com' : '',
    password: isTestMode ? '**********' : '',
  },
  inputValidities: {
    fullName: false,
    phoneNumber: false,
    email: false,
    password: false
  },
  formIsValid: false,
}

const Signup = ({ navigation }) => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isChecked, setChecked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue)
      dispatchFormState({ inputId, validationResult: result, inputValue })
    },
    [dispatchFormState]
  )

  useEffect(() => {
    if (error) {
      Alert.alert('An error occured', error)
    }
  }, [error])

  // implementing apple authentication
  const appleAuthHandler = () => {
    console.log("Apple Authentication")
  };

  // implementing facebook authentication
  const facebookAuthHandler = () => {
    console.log("Facebook Authentication")
  };

  // Implementing google authentication
  const googleAuthHandler = () => {
    console.log("Google Authentication")
  };

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.center}>
          <Text style={styles.title}>Sign Up</Text>

          <Input
            id="fullName"
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities['fullName']}
            placeholder="Full Name"
            placeholderTextColor={COLORS.black}
          />
          <Input
            id="email"
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities['email']}
            placeholder="Email"
            placeholderTextColor={COLORS.black}
            keyboardType="email-address"
          />
          <Input
            id="phoneNumber"
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities['phoneNumber']}
            placeholder="Phone Number"
            placeholderTextColor={COLORS.black}
          />
          <Input
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities['password']}
            autoCapitalize="none"
            id="password"
            placeholder="Password"
            placeholderTextColor={COLORS.black}
            secureTextEntry={true}
          />
          <View style={styles.checkBoxContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                color={isChecked ? COLORS.primary : "gray"}
                onValueChange={setChecked}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.privacy}>By continuing you accept our Privacy Policy</Text>
              </View>
            </View>
          </View>
          <Button
            title="Sign Up"
            filled
            onPress={() => navigation.navigate("Signin")}
            style={{
              marginVertical: 6,
              width: SIZES.width - 32
            }}
          />
          <View>
            <Text style={styles.socialTitle}>Continue with</Text>
            <View style={styles.socialBtnContainer}>
              <SocialButton
                icon={icons.appleLogo}
                onPress={appleAuthHandler}
              />
              <SocialButton
                icon={icons.facebook}
                onPress={facebookAuthHandler}
              />
              <SocialButton
                icon={icons.google}
                onPress={googleAuthHandler}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomLeft}>Already have an account ?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signin")}
          >
            <Text style={styles.bottomRight}>{" "}Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontFamily: "semiBold",
    color: COLORS.black,
    textAlign: "center",
    marginBottom: 22
  },
  checkBoxContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 18,
  },
  checkbox: {
    marginRight: 8,
    height: 16,
    width: 16,
    borderRadius: 999
  },
  privacy: {
    fontSize: 12,
    fontFamily: "openSansRegular",
    color: COLORS.black,
  },
  socialTitle: {
    fontSize: 19.25,
    fontFamily: "medium",
    color: COLORS.black,
    textAlign: "center",
    marginVertical: 26
  },
  socialBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 18,
    position: "absolute",
    bottom: 12,
    right: 0,
    left: 0,
  },
  bottomLeft: {
    fontSize: 14,
    fontFamily: "openSansRegular",
    color: "black"
  },
  bottomRight: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.primary
  },
})

export default Signup