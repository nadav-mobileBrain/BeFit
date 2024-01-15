import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { SIZES } from '../constants';

const data = {
  datasets: [
    {
      data: [50, 45, 60, 70, 55, 80, 90, 123],
      color: (opacity = 1) => `rgba(242, 93, 41, ${opacity})`,
      strokeWidth: 3, // optional, default 3
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

const  WeightStats = () => {
  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={SIZES.width  - 32}
        height={240}
        chartConfig={chartConfig}
        bezier
       
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width  - 32,
    marginTop: 45
  },
});

export default WeightStats;
