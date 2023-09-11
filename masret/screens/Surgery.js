import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Bar from "./Bar";
import { MaterialIcons } from '@expo/vector-icons'; 

const cardsData = [
  {
    id: 2,
    name: "All",
    title: 'Appendicitis',
    subTitle: 'High cardiologists | Alka hospital',
    time: 'Sunday, 12 June',
    dr: "Dr. Ahmad Ali",
    imageUrl: 'https://www.dpconline.org/images/roundicons/icon_clipboard.png',
  },
  {
    id: 1,
    name: "month",
    title: 'Gallstones',
    subTitle: 'High cardiologists | Alka hospital',
    time: 'Sunday, 12 June',
    dr: "Dr. Ahmad Ali",
    imageUrl: 'https://www.dpconline.org/images/roundicons/icon_clipboard.png',
  },
  {
    id: 3,
    name: "year",
    title: 'Gallstones',
    subTitle: 'High cardiologists | Alka hospital',
    time: 'Sunday, 12 June',
    dr: "Dr. Ahmad Ali",
    imageUrl: 'https://www.dpconline.org/images/roundicons/icon_clipboard.png',
  },
];

const Surgery = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeSelection = (typeId) => {
    setSelectedType(typeId);
  };

  const filteredCards = selectedType
    ? cardsData.filter((card) => card.id === selectedType)
    : cardsData;

  return (
    <>
      <Bar />
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {cardsData.map((type) => (
            <TouchableOpacity
              key={type.id}
              style={[
                styles.button,
                selectedType === type.id && styles.selectedButton,
              ]}
              onPress={() => handleTypeSelection(type.id)}
            >
              <Text style={styles.buttonText}>{type.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.cardsContainer}>
          {filteredCards.map((card, index) => (
            <View key={index} style={styles.cardContainer}>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Image
                    source={{ uri: card.imageUrl }}
                    style={styles.image}
                  />
                  <View style={styles.infoContainer}>
                    <View style={styles.titleContainer}>
                      <Text style={styles.title}>{card.title}</Text>
                    </View>
                    <Text style={styles.dr}>{card.dr}</Text>
                    <View style={styles.line} />
                    <View style={styles.timeContainer}>
                      <MaterialIcons name="date-range" size={15} color="#566D8F" style={styles.icon} />
                      <Text style={styles.hour}>{card.time}</Text>
                    </View>
                   
                  </View>
                  
                </View>
                <TouchableOpacity style={styles.buttonDetail}>
                      <Text style={styles.buttonText}>Detail</Text>
                    </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    marginHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 20,
    borderWidth: 1,
    color: "#566D8F",
    borderColor: '#566D8F',
  },
  selectedButton: {
    backgroundColor: '#566D8F',
    color: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#566D8F',
  },
  buttonText: {
    fontWeight: 'bold',
    color: "#566D8F",
    fontSize: 15,
    textAlign: 'center',
  },
  cardsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: 10,
  },
  cardContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: 390,
    height: 170,
    borderRadius: 16,
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 4, height: 7 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
    bottom:20,
  },
  infoContainer: {
    flex: 1,
    padding: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: '#1C1B1F',
    fontSize: 15,
  },
  dr: {
    color: '#787B80',
    fontSize: 15,
  },
  line: {
    backgroundColor: '#787B80',
    opacity: 0.1,
    height: 1,
    width: 350,
    marginTop: 15,
    marginLeft: -50,
  },
  icon: {
    marginLeft: -5,
    marginTop:7,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'start',
    marginLeft:-40,
    
  },
  hour: {
    flex: 1,
    flexDirection: 'row',
    color: '#787B80',
    fontSize: 15,
    padding: 3,
  },
  buttonDetail: {
    backgroundColor: '#EEF0F4',
    marginHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
    width: 350,
    height: 35,
    borderWidth: 1,
    color: "#566D8F",
    borderColor: '#EEF0F4',
    marginTop: 15,
  
    
  },
});

export default Surgery;
