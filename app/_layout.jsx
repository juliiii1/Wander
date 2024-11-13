// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View classname="flex-1 items-center justify-center bg-slate-400">
//       <Text className="text-3x1 font-black">WELCOME TO TALKING BOOK</Text>
//       <Text>Angelica C. Torres</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#228B22',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { View, Text } from 'react-native'
import React from 'react'
import { Stack, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync();

const Mainlayout = () => {

  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
     "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
   
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  

  return (
    <Stack>
      <Stack.Screen name="index"/>
    </Stack>
  )
}

export default Mainlayout