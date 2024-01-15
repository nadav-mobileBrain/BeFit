import { View, Text, Alert, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Checkbox from 'expo-checkbox'
import Input from '../components/Input'
import Button from '../components/Button'
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'
import { COLORS, SIZES, icons } from '../constants'
import SocialButton from '../components/SocialButton';

const isTestMode = true

const initialState = {
  inputValues: {
    email: isTestMode ? 'example@gmail.com' : '',
    password: isTestMode ? '**********' : '',
  },
  inputValidities: {
    email: false,
    password: false
  },
  formIsValid: false,
}

const Signin = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [formState, dispatchFormState] = useReducer(reducer, initialState)
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
  const appleAuthHandler = ()=>{
    console.log("Apple Authentication")
  };

  // implementing facebook authentication
  const facebookAuthHandler = ()=>{
    console.log("Facebook Authentication")
  };

  // Implementing google authentication
  const googleAuthHandler = ()=>{
    console.log("Google Authentication")
  };

  return (
   <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.center}>
            <Text style={styles.title}>Sign In</Text>
           <Input
            id="email"
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities['email']}
            placeholder="Email"
            placeholderTextColor={COLORS.black}
            keyboardType="email-address"
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
                <Text style={styles.privacy}>Remenber me</Text>
              </View>
            </View>
          </View>
          <Button
            title="Sign In"
            filled
            onPress={() =>navigation.navigate("Gender")}
            style={{ 
              marginVertical: 6,
              width: SIZES.width - 32
            }}
          />
          <TouchableOpacity
            onPress={() =>navigation.navigate("ForgotPassword")}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
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
          <Text style={styles.bottomLeft}>Don't have an account ?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.bottomRight}>{" "}Sign Up</Text>
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
    marginVertical: 32
  },
  socialBtnContainer:{ 
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
  forgotPassword: {
    fontSize: 12,
    fontFamily: "medium",
    color: COLORS.black,
    textAlign: "center",
    marginVertical: 12
  }
})

export default Signin