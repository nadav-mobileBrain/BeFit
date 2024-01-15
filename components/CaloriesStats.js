import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { SIZES } from '../constants';


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
  color: (opacity = 1) => `rgba(242, 93, 41, ${opacity})`, 
  style: {
    borderRadius: 16,
  },
};

const CaloriesStats = () => {
  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={SIZES.width - 48}
        height={242}
        chartConfig={chartConfig}
        verticalLabelRotation={12}
        showValuesOnTopOfBars={true}
        fromZero={true}
        yAxisLabel={''}
        yAxisSuffix={''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width  - 32
  },
});

export default CaloriesStats
