import { View, Text, Alert, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from "react-native-virtualized-view";
import Button from '../components/Button'
import { COLORS, SIZES } from '../constants'
import OTPTextInput from 'react-native-otp-textinput';

const Verification = ({ navigation }) => {
  const [error, setError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (error) {
      Alert.alert('An error occured', error)
    }
  }, [error])

   // Render Resend Code Modal
   const renderResendCodeModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalSubContainer}>
              <Text style={styles.modalTitle}>Have you not receive Verification</Text>
              <Text style={styles.modalTitle}>Codes OTP</Text>

              <View style={styles.modalMiddleContainer}>
                <Text style={styles.modalMiddleTitle}>An authentication code has been sent to</Text>
                <Text style={styles.modalMiddleTitleBold}>(+880) 111 222 333</Text>
              </View>
              <View style={styles.modalBottomContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                  }}
                  style={styles.btnCancel}>
                  <Text style={styles.btnCancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate("ResetPassword")
                  }
                  }
                  style={styles.btnOkay}>
                  <Text style={styles.btnOkayText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }

  return (
   <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.center}>
            <Text style={styles.title}>Verification</Text>
            <View style={styles.formContainer}>
          <Text style={styles.subtitle}>An authentication code has been sent to</Text>
          <Text style={styles.subtitle}>(+880) 111 222 333</Text>
          <View style={{ marginVertical: 22 }}>
            <OTPTextInput
              textInputStyle={styles.OTPStyle}
              inputCount={4}
              tintColor={COLORS.primary}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.subtitle}>I didn't receive code.</Text>
            <TouchableOpacity onPress={() => { setModalVisible(true) }}>
              <Text style={styles.boldTitle}>{" "}Resend Code</Text>
            </TouchableOpacity>
          </View>
          </View>
          <Button
            title="Continue"
            filled
            onPress={() =>navigation.navigate("ResetPassword")}
            style={{ marginVertical: 6 }}
          />
          <TouchableOpacity
            onPress={() =>navigation.navigate("Signin")}>
            <Text style={styles.forgotPassword}>Remenber Password?</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {renderResendCodeModal()}
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
  },
  formContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginVertical: 32,
    padding: 22
  },
  boldTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.primary,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "regular",
    color: COLORS.black,
    textAlign: "center"
  },
  OTPStyle: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    borderRadius: 8,
    height: 58,
    width: 58,
    backgroundColor: COLORS.secondaryWhite,
    borderBottomColor: "gray",
    borderBottomWidth: .4,
    borderWidth: .4,
    borderColor: "gray"
  },
  time: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.tertiary,
    textAlign: "center",
    marginTop: 10
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  modalSubContainer: {
    height: 220,
    width: SIZES.width * 0.86,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16
  },
  modalTitle: {
    fontSize: 16,
    fontFamily: "bold",
    color: COLORS.primary,
    textAlign: "center"
  },
  modalMiddleContainer: { 
    marginVertical: 16, 
    alignItems: "center" 
  },
  modalMiddleTitle: {
    fontSize: 14,
    fontFamily: "regular",
    color: COLORS.black,
    marginVertical: 8
  },
  modalMiddleTitleBold: {
    fontSize: 16,
    fontFamily: "bold",
    color: COLORS.black
  },
  modalBottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16
  },
  btnCancel: {
    height: 40,
    width: 130,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 20
  },
  btnCancelText: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.primary
  },
  btnOkay: {
    height: 40,
    width: 130,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 20
  },
  btnOkayText: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.white
  }
})

export default Verification
