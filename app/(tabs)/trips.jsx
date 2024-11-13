import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const destinationsData = [
  {
    id: 1,
    title: 'The Grand Palace',
    location: 'Thailand',
    description: "The Grand Palace is a complex of buildings at the heart of Bangkok, Thailand...",
    image: 'https://cdn.royalgrandpalace.th/stocks/home_banner/d640x980/1g/j6/gsay1gj6ae/banner.jpg',
    category: 'popular',
    posterName: 'Alice',
  },
  {
    id: 2,
    title: 'N Seoul Tower',
    location: 'Seoul, Korea',
    description: 'N Seoul Tower is an iconic attraction at the top of Mt. Namsan...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4RpvqvuiNmLOf--gU8wsuA6ihIk20txxTLg&s',
    category: 'new',
    posterName: 'Bob',
  },
  {
    id: 3,
    title: 'Gardens by the Bay',
    location: 'Singapore',
    description: 'The Gardens by the Bay is a nature park spanning 105 hectares...',
    image: 'https://d3iso9mq9tb10q.cloudfront.net/magefan_blog/g/a/gardens-by-the-bay_banner.jpg',
    category: 'popular',
    posterName: 'Charlie',
  },
];

const Favorites = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [savedDestinations, setSavedDestinations] = useState([]);
  const [likedDestinations, setLikedDestinations] = useState([]);

  const toggleSaveDestination = (id) => {
    setSavedDestinations((prev) =>
      prev.includes(id) ? prev.filter((destinationId) => destinationId !== id) : [...prev, id]
    );
  };

  const toggleLikeDestination = (id) => {
    setLikedDestinations((prev) =>
      prev.includes(id) ? prev.filter((destinationId) => destinationId !== id) : [...prev, id]
    );
  };

  const filteredDestinations = destinationsData.filter((destination) => {
    const matchesSearch = destination.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/8f/bd/1e/8fbd1e96ffd0ec73375e5de79d730d8a.jpg' }} style={styles.background}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search trips..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

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

        <ScrollView>
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination) => (
              <View key={destination.id} style={styles.card}>
                <Image source={{ uri: destination.image }} style={styles.image} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{destination.title}</Text>
                  <Text style={styles.cardLocation}>{destination.location}</Text>
                  <Text style={styles.cardDescription}>{destination.description}</Text>
                  <View style={styles.footer}>
                    <TouchableOpacity
                      style={styles.heartIcon}
                      onPress={() => toggleLikeDestination(destination.id)}
                    >
                      <Icon
                        name={likedDestinations.includes(destination.id) ? 'heart' : 'heart-o'}
                        size={24}
                        color="#ff4757"
                      />
                    </TouchableOpacity>
                    <Text style={styles.posterName}>{destination.posterName}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.saveIcon}
                  onPress={() => toggleSaveDestination(destination.id)}
                >
                  <Icon
                    name={savedDestinations.includes(destination.id) ? 'bookmark' : 'bookmark-o'}
                    size={24}
                    color="#dc3545"
                  />
                </TouchableOpacity>
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
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
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
    position: 'relative',
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
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  posterName: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10, // Adds space between the heart icon and the name
  },
  noResults: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 20,
  },
  saveIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  heartIcon: {
    marginRight: 5, // Space between heart icon and poster name
  },
});

export default Favorites;
