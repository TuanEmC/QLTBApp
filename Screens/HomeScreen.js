// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import homeScreenStyles from '../styles/homeScreenStyles';

const posts = [
  {
    id: '1',
    title: 'Tin tức đầu tiên',
    imageUrl: 'https://images.unsplash.com/photo-1516024485-f3d4b9891b7a', // Ảnh biển
    content: 'Đây là nội dung tin tức đầu tiên. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    title: 'Tin tức thứ hai',
    imageUrl: 'https://images.unsplash.com/photo-1519860184746-63c72d37841e', // Ảnh thành phố
    content: 'Nội dung tin tức thứ hai. Nullam auctor, nisi id suscipit interdum.',
  },
  {
    id: '3',
    title: 'Tin tức thứ ba',
    imageUrl: 'https://images.unsplash.com/photo-1506748686215-d56d67b8fe92', // Ảnh thiên nhiên
    content: 'Nội dung của tin tức thứ ba. Praesent scelerisque eros at massa facilisis, vel hendrerit dui suscipit.',
  },
  {
    id: '4',
    title: 'Tin tức thứ tư',
    imageUrl: 'https://images.unsplash.com/photo-1514510950777-5c54092690b0', // Ảnh đồi núi
    content: 'Nội dung tin tức thứ tư. Vivamus a ante vel augue aliquet sollicitudin.',
  },
  {
    id: '5',
    title: 'Tin tức thứ năm',
    imageUrl: 'https://images.unsplash.com/photo-1567207735-9774b0b5e0f9', // Ảnh đường phố
    content: 'Nội dung tin tức thứ năm. Donec vel orci auctor, fermentum erat a, feugiat purus.',
  },
];

export default function HomeScreen() {
  const renderPost = ({ item }) => (
    <View style={homeScreenStyles.newsContainer}>
      <Image source={{ uri: item.imageUrl }} style={homeScreenStyles.newsImage} />
      <Text style={homeScreenStyles.newsTitle}>{item.title}</Text>
      <Text style={homeScreenStyles.newsContent}>{item.content}</Text>
      <TouchableOpacity style={homeScreenStyles.readMoreButton}>
        <Text style={homeScreenStyles.readMoreText}>Xem thêm</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id}
      contentContainerStyle={homeScreenStyles.container}
    />
  );
}
