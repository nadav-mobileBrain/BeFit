import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { COLORS } from '../constants';

const CircularPercentage = ({ percentage, radius }) => {
  const strokeWidth = 24;
  const effectiveRadius = radius - strokeWidth / 2; // Adjust for stroke width

  const circumference = 2 * Math.PI * effectiveRadius;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={{ alignItems: 'center', marginVertical: 12 }}>
      <Svg height={radius * 2} width={radius * 2}>
        {/* Background Circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={effectiveRadius}
          stroke="#d3d3d3"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Percentage Circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={effectiveRadius}
          stroke={COLORS.primary}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          fill="none"
        />
      </Svg>
      <Text
        style={{
          textAlign: 'center',
          position: 'absolute',
          bottom: radius - 12,
          left: 12,
          right: 12,
          fontSize: 32,
          fontFamily: 'bold',
        }}
      >{`${percentage}%`}</Text>
    </View>
  );
};

export default CircularPercentage;
