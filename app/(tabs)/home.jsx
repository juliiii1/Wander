import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';

const destinationsData = [
  {
    id: 1,
    title: 'N Seoul Tower',
    location: 'Seoul, Korea',
    description: "N Seoul Tower is an iconic attraction at the top of Mt. Namsan...",
    image: 'https://i.pinimg.com/564x/93/d2/31/93d2319686e1a556df802c9eb7cc4fb2.jpg',
    category: 'popular',
  },
  {
    id: 2,
    title: 'Gyeongbokgung Palace',
    location: 'Seoul, Korea',
    description: 'Gyeongbokgung Palace, located near Gwanghwamun Square...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZi6orIKdUL3g6m3S1ou0-FVCIuKUCwWa3w&s',
    category: 'new',
  },
  {
    id: 3,
    title: 'Colosseum',
    location: 'Rome, Italy',
    description: 'The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy.',
    image: 'https://i.pinimg.com/564x/a0/cd/b2/a0cdb2aa71bb75da45f2abc809636e7a.jpg',
    category: 'popular',
  },
];

const backgroundImageUrl = 'https://i.pinimg.com/enabled_hi/564x/8f/bd/1e/8fbd1e96ffd0ec73375e5de79d730d8a.jpg'; // Replace with your background image URL

const Favorites = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDestinations = destinationsData.filter((destination) => {
    const matchesSearch = destination.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={styles.background}>
      <View style={styles.container}>
        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search places..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        {/* Category Buttons */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, selectedCategory === 'all' && styles.activeTab]}
            onPress={() => setSelectedCategory('all')}
          >
            <Text style={styles.tabText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, selectedCategory === 'popular' && styles.activeTab]}
            onPress={() => setSelectedCategory('popular')}
          >
            <Text style={styles.tabText}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, selectedCategory === 'new' && styles.activeTab]}
            onPress={() => setSelectedCategory('new')}
          >
            <Text style={styles.tabText}>New</Text>
          </TouchableOpacity>
        </View>

        {/* Destination Cards */}
        <ScrollView>
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination) => (
              <View key={destination.id} style={styles.card}>
                <Image source={{ uri: destination.image }} style={styles.image} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{destination.title}</Text>
                  <Text style={styles.cardLocation}>{destination.location}</Text>
                  <Text style={styles.cardDescription}>{destination.description}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noResults}>No results found</Text>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent', // Semi-transparent background
  },
  searchBar: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#f8d7da',
  },
  activeTab: {
    backgroundColor: '#dc3545',
  },
  tabText: {
    color: 'black',
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
  noResults: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 20,
  },
});

export default Favorites;
