import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Bar from "./Bar";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons'; 

const Allergy = () => {
    const cardColors = ["#FEE1E6", "#FAF0DB",'#D6F6FF']; // Add more colors as needed

  return (
    <>
      <Bar />

      <View style={styles.cardsContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <View style= {[styles.iconContainer, { backgroundColor: cardColors[0] }]}>
                <MaterialCommunityIcons
                  name="needle"
                  size={27}
                  color="#6E6587"
                />
              </View>
              <View style={styles.infoContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Allergic Rhinitis</Text>
                </View>
                <Text style={styles.dr}>see more details </Text>
              </View>
            </View>
          </View>
          <View style={styles.br} />

          <View style={styles.card}>
            <View style={styles.cardContent }>
            <View style= {[styles.iconContainer, { backgroundColor: cardColors[1] }]}>
            <MaterialCommunityIcons name="allergy" size={30} color="#E09F1F" />
              </View>
              <View style={styles.infoContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Eczema </Text>
                </View>
                <Text style={styles.dr}>see more details </Text>
              </View>
            </View>
          </View>
          <View style={styles.br} />

          <View style={styles.card}>
            <View style={styles.cardContent }>
            <View style= {[styles.iconContainer, { backgroundColor: cardColors[2] }]}>
            <FontAwesome5 name="head-side-mask" size={30} color="#009DC7" />
              </View>
              <View style={styles.infoContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Allergic Asthma </Text>
                </View>
                <Text style={styles.dr}>see more details </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    br: {
        marginVertical: 10, // Adds vertical margin between lines
      },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  button: {
    marginHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 16,
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 20,
    borderWidth: 1,
    color: "#566D8F",
    borderColor: "#566D8F",
  },
  selectedButton: {
    backgroundColor: "#566D8F",
    color: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 16,
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#566D8F",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#566D8F",
    fontSize: 15,
    textAlign: "center",
  },
  cardsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
    marginTop: 10,
  },
  cardContainer: {
    marginTop: 20,
    alignItems: "center",
    borderColor:"#BECADA",
  },
  card: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(190, 202, 218, 0.5)", // Use an rgba color for transparency
    backgroundColor: "#FFF",

    width: 390,
    height: 100,

    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: { width: 4, height: 7 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 2,
  },
  iconContainer: {
    width: 60, // Set the width of the square
    height: 60, // Set the height of the square
    justifyContent: "center", // Center the icon vertically
    alignItems: "center", // Center the icon horizontally
    borderRadius: 20, // Apply a border radius for a rounded appearance
    backgroundColor: "#FEE1E6", // Customize the background color
    marginRight: 10, // Add spacing as needed
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 18,
    marginTop: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
    bottom: 20,
  },
  infoContainer: {
    flex: 1,
    padding: 5,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  title: {
    fontWeight: "bold",
    color: "#1C1B1F",
    fontSize: 18,
  },
  dr: {
    color: "#787B80",
    fontSize: 15,
    textDecorationLine: "underline", // Add underline to text
  },
  line: {
    backgroundColor: "#787B80",
    opacity: 0.1,
    height: 1,
    width: 350,
    marginTop: 15,
    marginLeft: -50,
  },
  icon: {
    marginLeft: -5,
    marginTop: 7,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "start",
    marginLeft: -40,
  },
  hour: {
    flex: 1,
    flexDirection: "row",
    color: "#787B80",
    fontSize: 15,
    padding: 3,
  },
  buttonDetail: {
    backgroundColor: "#EEF0F4",
    marginHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
    width: 350,
    height: 35,
    borderWidth: 1,
    color: "#566D8F",
    borderColor: "#EEF0F4",
    marginTop: 15,
  },
  ratings: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 2,
  },
  starIcon: {
    marginRight: 2,
    marginTop: 9,
  },
  text: {
    marginLeft: 5, // Adjust the spacing between stars and text as needed
    fontSize: 15,
    color: "#566D8F", // Customize the text color
    marginTop: 7,
  },
});

export default Allergy;
