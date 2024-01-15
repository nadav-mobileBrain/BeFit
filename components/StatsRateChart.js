import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { SIZES } from '../constants';

const screenWidth = Dimensions.get('window').width;

const data = {
  datasets: [
    {
      data: [50, 45, 60, 70, 55, 80],
      color: (opacity = 1) => `rgba(64, 219, 193, ${opacity})`,
      strokeWidth: 3, // optional, default 3
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

const StatsRateChart = () => {
  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={SIZES.width / 2 -32}
        height={80}
        chartConfig={chartConfig}
        bezier
        withDots={false}
        withInnerLines={false}
        withOuterLines={false}
        withHorizontalLabels={false}
        withVerticalLabels={false}
        withShadow={false}
        withTooltip={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width / 2 -32
  },
});

export default StatsRateChart;
