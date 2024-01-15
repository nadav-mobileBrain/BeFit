import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [50, 70, 60, 80, 90, 75, 65],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(64, 219, 193, ${opacity})`, 
  style: {
    borderRadius: 16,
  },
};

const SleepBarChart = () => {
  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={screenWidth}
        height={100}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        showValuesOnTopOfBars={true}
        fromZero={true}
        yAxisLabel={''}
        yAxisSuffix={''}
        withInnerLines={false}
        withOuterLines={false}
        withHorizontalLabels={false}
        withVerticalLabels={false}
        withShadow={false}
        showBarTops={false}
        showBarValues={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SleepBarChart
