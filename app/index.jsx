import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  const logoSize = { width: 500, height: 200 }; // Increased logo size

  // URL of the background image
  const backgroundImageUrl = 'https://i.pinimg.com/enabled_hi/564x/8f/bd/1e/8fbd1e96ffd0ec73375e5de79d730d8a.jpg'; // Background image URL

  return (
    <ImageBackground
      source={{ uri: backgroundImageUrl }} // Using URL for background image
      style={{ flex: 1 }}
      resizeMode="cover" // Adjust this to your liking (e.g., "cover", "contain")
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={{ width: '100%', alignItems: 'center', paddingHorizontal: 16 }}>
            <Image
              source={images.logo}
              style={{ width: logoSize.width, height: logoSize.height, marginTop: 40 }}
              resizeMode="contain"
            />
            <View style={{ marginTop: 5 }}>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
                Your ultimate travel companion that simplifies planning and enriches every journey.
              </Text>
            </View>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 100, textAlign: 'center' }}>
              Join us in exploring the world.
            </Text>

            <CustomButton
              title="Let's go explore!"
              handlePress={() => router.push('/sign-in')} // Navigating to Sign In
              containerStyles={{ width: '90%', marginTop: 20 }} // Set custom width here
            />
          </View>
        </ScrollView>
        <StatusBar backgroundColor="orange" style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}  

