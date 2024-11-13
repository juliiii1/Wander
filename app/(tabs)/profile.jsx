import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, TextInput, Button, ImageBackground } from 'react-native';
import { router } from 'expo-router';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('@julieee');
  const [name, setName] = useState('Julie Paz Hacbang');
  const [bio, setBio] = useState('Travel enthusiast, photographer, and explorer. Capturing moments and sharing stories from my adventures around the world.');

  const handleSave = () => {
    setModalVisible(false);
  };

  const handleLogoutPress = () => {
    // Navigate to the index screen (assuming it's the main screen)
    router.push('/'); // Use '/' to navigate to the root
};


  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/originals/8f/bd/1e/8fbd1e96ffd0ec73375e5de79d730d8a.jpg' }}
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        {/* Profile Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://i.pinimg.com/564x/30/b8/10/30b81087a3b06a0d10e28d835b2f8b73.jpg' }}
            style={styles.coverPhoto}
          />
          <Image
            source={{ uri: 'https://i.pinimg.com/564x/77/2f/87/772f87d573aa780192ad55b5ede24724.jpg' }}
            style={styles.profilePic}
          />
          <View style={styles.profileInfo}>
            <View style={styles.textContainer}>
              <Text style={styles.username}>{username}</Text>
              <Text style={styles.name}>{name}</Text>
            </View>
          </View>
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Bio Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bio</Text>
          <Text style={styles.bioText}>{bio}</Text>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.contact}>📸 Instagram: @erensrxv</Text>
          <Text style={styles.contactInfo}>
            For collaborations or inquiries, feel free to reach out via Instagram or email.
          </Text>
        </View>

        {/* Travel Diary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Travels</Text>
          <View style={styles.travelDiary}>
            <Image
              source={{ uri: 'https://i.pinimg.com/enabled_hi/564x/15/7b/2a/157b2a943ef75d181c74e41dcbe207d9.jpg' }}
              style={styles.travelImage}
            />
            <TouchableOpacity style={styles.addPhotoButton}>
              <Text style={styles.addPhotoText}>+ Add Photo</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Log Out Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogoutPress} // Call the logout handler
        >
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>

        {/* Edit Profile Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Edit Profile</Text>
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.input}
                placeholder="Bio"
                value={bio}
                onChangeText={setBio}
                multiline
              />
              <Button title="Save" onPress={handleSave} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    position: 'relative',
    marginBottom: 20,
  },
  coverPhoto: {
    width: '100%',
    height: 180,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    position: 'absolute',
    bottom: -50,
    left: 20,
    backgroundColor: '#fff',
  },
  profileInfo: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
  textContainer: {
    marginLeft: 130,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  name: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  editButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 10,
    alignSelf: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bioText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
  },
  contact: {
    fontSize: 16,
    color: '#333',
  },
  contactInfo: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  travelDiary: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  travelImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  addPhotoButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  addPhotoText: {
    color: '#888',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 20,
    alignSelf: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
