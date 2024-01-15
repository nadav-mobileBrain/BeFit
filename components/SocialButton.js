import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const SocialButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity 
       style={styles.container} 
       onPress={onPress}>
        <Image
          source={icon}
          resizeMode='contain'
          style={styles.icon}
        />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({ 
    container: {
        marginHorizontal: 9
    },
    icon: {
        height: 36,
        width: 36,
    }
})

export default SocialButton