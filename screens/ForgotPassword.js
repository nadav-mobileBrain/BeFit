import { View, Text, Alert, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Checkbox from 'expo-checkbox'
import Input from '../components/Input'
import Button from '../components/Button'
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'
import { COLORS, SIZES } from '../constants'

const isTestMode = true

const initialState = {
  inputValues: {
    email: isTestMode ? 'example@gmail.com' : '',
  },
  inputValidities: {
    email: false,
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

  return (
   <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.center}>
            <Text style={styles.title}>Forgot Password</Text>
           <Input
            id="email"
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities['email']}
            placeholder="Email"
            placeholderTextColor={COLORS.black}
            keyboardType="email-address"
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
            title="Continue"
            filled
            onPress={() =>navigation.navigate("Verification")}
            style={{ 
              marginVertical: 6,
              width: SIZES.width - 32
            }}
          />
          <TouchableOpacity
            onPress={() =>navigation.navigate("Signin")}>
            <Text style={styles.forgotPassword}>Remenber Password?</Text>
          </TouchableOpacity>
        </ScrollView>
       
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
    marginVertical: 22
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
  forgotPassword: {
    fontSize: 12,
    fontFamily: "medium",
    color: COLORS.black,
    textAlign: "center",
    marginVertical: 12
  }
})

export default Signin