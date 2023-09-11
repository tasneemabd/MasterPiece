import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 

const DetailSurgery  = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.image}>
          <TouchableOpacity style={styles.btn}>
            <Image
              source={{ uri: 'https://i.imgur.com/wvxPV9S.png' }}
              style={{ height: 100, width: 100, borderRadius: 50 }}
            />
          </TouchableOpacity>
          <Text style={styles.name}> Appendicitis</Text>
          <View style ={styles.br}/>
          <View style={styles.dFlex}>
          <EvilIcons name="location" size={24} color="#566D8F" />
            <Text style={styles.idd1} >Specialty Hospital Clinics</Text>
            <MaterialIcons name="date-range" size={24} color="#566D8F" />
            <Text style={styles.idd1}>Sunday, 12 June</Text>

          
          </View>
          <View style={styles.dFlex}>
          <Fontisto name="doctor" size={24} color="#566D8F" />
            <Text style={styles.idd1} >Dr.ahamd Ali</Text>
            <Feather name="phone" size={24} color="#566D8F" />
            <Text style={styles.idd1}>+49 989 232</Text>

          
          </View>
          
        
      
          <View style={styles.noteContainer}>
              <Text style={styles.note}>Note:</Text>
            </View>
            <Text style={styles.noteContent}>
              Appendectomy is a surgical procedure performed to remove an inflamed or infected appendix.
            </Text>
          </View>
         
          <View style={styles.date}>
            <Text style={styles.join}>Joined May, 2021</Text>
          </View>
        </View>
      </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        alignItems: 'flex-start',

  },
  br: {
    marginVertical: 10, // Adds vertical margin between lines
  },
  card: {
    width: 400,
    backgroundColor: '#efefef',
    borderRadius: 8,
    padding: 10,
    alignItems: 'flex-start',

  },
  image: {
    alignItems: 'center',
  },
  btn: {
    height: 140,
    borderRadius: 70,
    overflow: 'hidden',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',

  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding:50, 
  },
  note: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
    marginLeft:-190,

    
  },
  noteContent: {
    // Define styles for the note content here
    fontSize: 16,
    lineHeight: 24, // Adjust line height as needed
    
  },
  
  idd: {
    fontSize: 14,
    fontWeight: '600',
    color:"#566D8F",
  },
  dFlex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
      color:"#566D8F",
  },
  idd1: {
    fontSize: 12,
    padding:2,
    color:"#566D8F",
  },
  number: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  follow: {
    fontSize: 12,
    fontWeight: '500',
    color: '#444444',
  },
  btn1: {
    height: 40,
    width: 150,
    borderRadius: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#aeaeae',
    fontSize: 15,
  },
  text: {
    marginTop: 16,
    alignItems: 'center',
        alignItems: 'flex-start',

  },

  join: {
    fontSize: 14,
    color:"#fff",
    fontWeight: 'bold',
   
  },
  date: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    marginTop: 20,
    width:130,
    height:40,
    padding:10,
    marginLeft:120,
    backgroundColor:"#566D8F",
    color:"#fff",
    alignItems:"center"

  },
});

export default DetailSurgery ;
