import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from "../constants";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons"
import { ScrollView } from 'react-native-virtualized-view';
import { notifications } from '../data';
import NotificationCard from '../components/NotificationCard';

const Notification = ({ navigation }) => {
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
          <Text style={styles.headerTitle}>Notifications</Text>
          <TouchableOpacity>
            <Text style={styles.createTitle}>{"   "}</Text>
          </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.area}>
        <View style={styles.container}>
            {renderHeader()}
            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                  data={notifications}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item=>item.id}
                  renderItem={({ item })=>(
                    <NotificationCard
                    name={item.name} 
                    image={item.image} 
                    time={item.time} 
                    onPress={()=>console.log(item)}
                    />
                  )}
                />
            </ScrollView>
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
    marginBottom: 12
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
  viewContainer: {
    width: SIZES.width - 32,
    height: 77,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 7.7,
    justifyContent: "space-between",
    marginVertical: 8
  },
})

export default Notification