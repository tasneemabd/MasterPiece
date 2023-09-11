import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import Card from '../Card';
import MenuAppBar from '../MenuAppBar';
import StackNavigator from '../StackNavigator';

import { useNavigation } from '@react-navigation/native';



export default function Categories() {

    
  const categories = [
    { iconName: 'user', iconType: 'font-awesome', label: 'Profile ' ,screenName: 'Profile'},
    { iconName: 'star', iconType: 'font-awesome', label: 'X-rays' ,screenName: 'XRayResults'},
    { iconName: 'home', iconType: 'font-awesome', label: 'Lab Results',screenName: 'LabResults' },
    { iconName: 'cog', iconType: 'font-awesome', label: 'Medication' ,screenName: 'Medication'},
    { iconName: 'globe', iconType: 'font-awesome', label: 'All Doctors' ,screenName: 'AllDoctors'},
    { iconName: 'music', iconType: 'font-awesome', label: 'Surgery',screenName: 'Surgery' },
    { iconName: 'camera', iconType: 'font-awesome', label: 'My visit' ,screenName: 'Myvisit'},
    { iconName: 'book', iconType: 'font-awesome', label: 'Allergy',screenName: 'Allergy' },
  ];

  const firstRow = categories.slice(0, 4);
  const secondRow = categories.slice(4, 8);

  return (
    <>
   
      <Card/>
    <View style={styles.container}>
      
      <View style={styles.row}>
        {firstRow.map((category, index) => (
          <CategoryIcon
            key={index}
            iconName={category.iconName}
            iconType={category.iconType}
            label={category.label}
          />
        ))}
      </View>
      <View style={styles.row}>
        {secondRow.map((category, index) => (
          <CategoryIcon
            key={index}
            iconName={category.iconName}
            iconType={category.iconType}
            label={category.label}
          />
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
    </>

 
  );
}
const CategoryIcon = ({ iconName, iconType, label ,screenName }) => {
  const navigation = useNavigation();

  const handleCategoryPress = () => {
    if (screenName) {
      navigation.navigate(screenName);
    } else {
      console.error("Screen name is not specified.");
    }
  };
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={handleCategoryPress}>
      <View style={styles.circle}>
        <Icon name={iconName} type={iconType} color="#566D8F" size={30} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',    
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute icons evenly along the row
  },
  iconContainer: {
    alignItems: 'center',
    margin: 10,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#F1F3F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginTop: 10,
    fontSize: 12,
    color: 'black',
  },
});


