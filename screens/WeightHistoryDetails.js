import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from '../constants';
import { ScrollView } from 'react-native-virtualized-view';
import { weightHistoryDetails } from '../data';

const WeightHistoryDetails = ({ navigation }) => {
  /**
  * Render Header
  */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Weight tracking</Text>
        <TouchableOpacity>
          <Text style={styles.createTitle}>Add</Text>
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
            data={weightHistoryDetails}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.cardContainer}>
                <View>
                  <Text style={styles.date}>{item.date}</Text>
                  <Text style={styles.weight}>{item.weight}</Text>
                </View>
                <View style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-end"
                }}>
                  <Text style={styles.time}>{item.time}</Text>
                  <View style={{
                    flexDirection: "row",
                  }}>
                    {
                      item.plusMinus > 0 ? (
                        <View style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 10
                        }}>
                          <Text style={{
                            fontSize: 10,
                            fontFamily: "medium",
                            color: "green",
                          }}>{item.plusMinus} kg {"  "}</Text>
                          <Ionicons
                            name="arrow-down-circle-outline"
                            color="green"
                            size={16}
                          />
                        </View>
                      ) : (
                        <View style={{
                          flexDirection: "row",
                          marginTop: 10
                        }}>
                          <Text style={{
                            fontSize: 12,
                            fontFamily: "medium",
                            color: "red"
                          }}>{item.plusMinus} kg{"  "}</Text>
                          <Ionicons
                            name="arrow-up-circle-outline"
                            color="red"
                            size={16}
                          />
                        </View>
                      )
                    }
                  </View>
                </View>
              </TouchableOpacity>
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
  viewTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black,
    marginVertical: 22
  },
  cardContainer: {
    width: SIZES.width - 32,
    padding: 16,
    height: 70,
    borderRadius: 7.7,
    backgroundColor: COLORS.white,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8
  },
  date: {
    fontSize: 10,
    fontFamily: "regular",
    color: "#404B52",
    marginBottom: 4
  },
  weight: {
    fontSize: 16,
    fontFamily: "medium",
    color: "black",
  },
  time: {
    fontSize: 10,
    fontFamily: "regular",
    color: "#404B52"
  }
})
export default WeightHistoryDetails