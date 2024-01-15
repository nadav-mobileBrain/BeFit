import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons"
import { ScrollView } from 'react-native-virtualized-view';
import { COLORS, SIZES, images } from '../constants';
import { launchImagePicker } from '../utils/ImagePickerHelper';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Octicons } from "@expo/vector-icons"
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";

const ProfileAccount = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState();
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("12/12/2000");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  useEffect(() => {
    if (error) {
        Alert.alert('An error occured', error)
    }
  }, [error])

  const pickImage = async () => {
      try {
          const tempUri = await launchImagePicker()

          if (!tempUri) return

          // set the image
          setImage({ uri: tempUri })
      } catch (error) { }
  }

   /**
    * 
   * Render Header
   */
   const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={()=>navigation.goBack()}>
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Account Information</Text>
          <TouchableOpacity
            onPress={()=>navigation.navigate("Profile")}
          >
            <Text style={styles.createTitle}>Save</Text>
          </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.area}>
        <View style={styles.container}>
          {renderHeader()}
          <ScrollView>  
          <View style={styles.imageProfileContainer}>
                    <Image
                        source={
                            image === null ?
                                images.avatar :
                                image
                        }
                        resizeMode='cover'
                        style={styles.imageProfile}
                    />
                    <TouchableOpacity
                        onPress={pickImage}
                        style={styles.pickIcon}
                    >
                        <MaterialCommunityIcons
                            name="pencil-outline"
                            size={18}
                            color={COLORS.white} />
                    </TouchableOpacity>
           </View>

           <View style={styles.settingsContainer}>
           <TouchableOpacity 
              style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Personal Trainings</Text>
              <View style={styles.viewRight}>
                <Text style={styles.viewRightTitle}>Deborah Moore</Text>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Weight</Text>
              <View style={styles.viewRight}>
                <Text style={styles.viewRightTitle}>52.7 kg</Text>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={handleOnPressStartDate}
              style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Date of Birth</Text>
              <View style={styles.viewRight}>
                <Text style={styles.viewRightTitle}>{selectedStartDate}</Text>
                <Octicons name="chevron-right" size={24} color="#A9B2BA" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=>navigation.navigate("ChangeEmail")}
              style={styles.viewContainer}>
              <Text style={styles.viewLeft}>Email</Text>
              <View style={styles.viewRight}>
                <Text style={styles.viewRightTitle}>deborah.moore@email.com</Text>
              </View>
            </TouchableOpacity>
           </View>
          </ScrollView>

           {/* Create modal for date picker */}
           <Modal
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  mode="calendar"
                  minimumDate={startDate}
                  selected={startedDate}
                  onDateChanged={handleChangeStartDate}
                  onSelectedChange={(date) => setSelectedStartDate(date)}
                  options={{
                    backgroundColor: COLORS.primary,
                    textHeaderColor: COLORS.white,
                    textDefaultColor: "#FFFFFF",
                    selectedTextColor: COLORS.primary,
                    mainColor: COLORS.white,
                    textSecondaryColor: "#FFFFFF",
                    borderColor: "rgba(122, 146, 165, 0.1)",
                  }}
                />

                <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text style={{ color: "white" }}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

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
    justifyContent: "space-between"
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black,
  },
  createTitle: {
    fontFamily: "openSansRegular",
    color: COLORS.primary,
    fontSize: 16,
  },
  headerIconContainer: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E5E9EF",
    borderRadius: 7.7,
    borderWidth: 1
  },
  imageProfileContainer: { 
      marginVertical: 12, 
      flexDirection: "column", 
      alignItems: "center",
      height: 130,
      width: 130,
      borderRadius: 65,
      alignSelf: "center",
      },
  imageProfile: {
    height: 130,
    width: 130,
    borderRadius: 65
},
pickIcon: {
  height: 36,
  width: 36,
  borderRadius: 21,
  backgroundColor: COLORS.primary,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  bottom: 0,
  right: 0
},
settingsContainer: {
  width: SIZES.width - 32,
  paddingVertical: 12,
  borderRadius: 7.7,
  backgroundColor: COLORS.white
},
viewContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 12,
  marginVertical: 12
},
viewLeft: {
  fontSize: 16,
  fontFamily: "regular",
  color: COLORS.black
},
viewRight: {
  flexDirection: "row",
  alignItems: "center",
},
viewRightTitle: {
  fontSize: 13.47,
  color: "#404B52",
  fontFamily: "openSansRegular",
  marginRight: 12
},
subtitle: {
  fontSize: 16,
  fontFamily: "medium",
  color: COLORS.black,
  marginVertical: 12
},
centeredView: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
},
modalView: {
  margin: 20,
  backgroundColor: COLORS.primary,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 20,
  padding: 35,
  width: "90%",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
})

export default ProfileAccount