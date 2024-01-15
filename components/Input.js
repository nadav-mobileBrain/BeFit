import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

const Input = (props) => {

    const onChangeText = (text) => {
        props.onInputChanged(props.id, text)
    }

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.inputContainer,
                    { borderColor: COLORS.secondaryWhite },
                ]}
            >
                {props.icon && (
                    <Image
                        source={props.icon}
                        style={[
                            styles.icon
                        ]}
                    />
                )}
                <TextInput
                    {...props}
                    onChangeText={onChangeText}
                    style={styles.input}
                    placeholder={props.placeholder}
                    placeholderTextColor={props.placeholderTextColor}
                    autoCapitalize='none'
                    
                />
            </View>
            {props.errorText && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{props.errorText[0]}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    inputContainer: {
        width: '100%',
        backgroundColor: COLORS.secondaryWhite,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding2,
        borderRadius: 12,
        borderWidth: 1,
        marginVertical: 5,
        flexDirection: 'row',
        height: 52,
        alignItems: "center"
    },
    icon: {
        marginRight: 10,
        height: 20,
        width: 20,
        tintColor: "#BCBCBC"
    },
    input: {
        color: COLORS.black,
        flex: 1,
        fontFamily: 'openSansRegular',
        fontSize: 13,
        paddingTop: 0,
    },
    errorContainer: {
        marginVertical: 4,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
})
export default Input