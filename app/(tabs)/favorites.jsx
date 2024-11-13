import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const destinationsData = [
  {
    id: 1,
    title: 'Jeju Island',
    location: 'Seoul, Korea',
    description:
      "Jeju Island is South Korea's largest island, covering an area of 1833.2 km². It is part of Jeju Province.",
    image: 'https://i.pinimg.com/enabled_hi/564x/88/a0/21/88a021468056292b9838f10def7754ea.jpg',
    name: 'Alice Johnson', // Added name
  },
  {
    id: 2,
    title: 'Gardens by the Bay',
    location: 'Singapore',
    description:
      'The Gardens by the Bay is a nature park spanning 101 hectares in the Central Region of Singapore.',
    image: 'https://i.pinimg.com/736x/9d/49/d6/9d49d6c3945c8b75c8a10f43a14d8111.jpg',
    name: 'Michael Smith', // Added name
  },
  {
    id: 3,
    title: 'Tokyo Tower',
    location: 'Japan',
    description:
      'The tower is surrounded by notable temples and parks, and is a must-see destination in Tokyo.',
    image: 'https://i.pinimg.com/564x/f7/18/89/f718895b70707e4b920b5a3189ffdc72.jpg',
    name: 'Emma Brown', // Added name
  },
];

const backgroundImageUrl = 'https://i.pinimg.com/originals/8f/bd/1e/8fbd1e96ffd0ec73375e5de79d730d8a.jpg';

const Favorites = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [likedDestinations, setLikedDestinations] = useState([]);
  const [savedDestinations, setSavedDestinations] = useState([]);

  const toggleLikeDestination = (id) => {
    setLikedDestinations((prev) =>
      prev.includes(id) ? prev.filter((destinationId) => destinationId !== id) : [...prev, id]
    );
  };

  const toggleSaveDestination = (id) => {
    setSavedDestinations((prev) =>
      prev.includes(id) ? prev.filter((destinationId) => destinationId !== id) : [...prev, id]
    );
  };

  const filteredDestinations = destinationsData.filter((destination) =>
    destination.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Destinations</Text>

        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        {/* Destination Cards */}
        <ScrollView>
          {filteredDestinations.map((destination) => (
            <View key={destination.id} style={styles.card}>
              <Image source={{ uri: destination.image }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{destination.title}</Text>
                <Text style={styles.cardLocation}>{destination.location}</Text>
                <Text style={styles.cardDescription}>{destination.description}</Text>
                <View style={styles.iconContainer}>
                  <TouchableOpacity onPress={() => toggleLikeDestination(destination.id)}>
                    <Icon
                      name={likedDestinations.includes(destination.id) ? 'heart' : 'heart-o'}
                      size={24}
                      color="#ff4757"
                    />
                  </TouchableOpacity>
                  <Text style={styles.postedBy}>{destination.name}</Text>
                  <TouchableOpacity onPress={() => toggleSaveDestination(destination.id)} style={styles.saveIcon}>
                    <Icon
                      name={savedDestinations.includes(destination.id) ? 'bookmark' : 'bookmark-o'}
                      size={24}
                      color="#ff4757"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent', // Semi-transparent background for readability
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchBar: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardLocation: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#777',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, // Adjusts spacing from the description
    justifyContent: 'space-between', // Spreads out items
  },
  postedBy: {
    marginLeft: 10,
    fontSize: 12,
    color: '#777',
    flex: 1, // Allows the posted by text to take available space
  },
  saveIcon: {
    marginLeft: 10, // Adds space between name and save icon
  },
});

export default Favorites;
