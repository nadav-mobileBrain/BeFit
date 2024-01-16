import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import { FONTS } from './constants/fonts'
import AppNavigation from './navigations/AppNavigation'
import { LogBox, View } from 'react-native'
import { StyleSheet, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import { WebView } from 'react-native-webview'
//Ignore all log notifications
LogBox.ignoreAllLogs()

SplashScreen.preventAutoHideAsync()

export default function App() {
    const [fontsLoaded] = useFonts(FONTS)

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null
    }

    return (
        // <SafeAreaView style={styles.container}>
        //     <WebView source={{ uri: 'https://www.bet365.com' }} />
        // </SafeAreaView>
        <SafeAreaProvider onLayout={onLayoutRootView}>
            <AppNavigation />
        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
})
