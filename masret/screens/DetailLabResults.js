import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { Foundation } from '@expo/vector-icons'; 
import { color } from 'react-native-elements/dist/helpers';

const DetailLabResults  = () => {
  return (
    
    <View style={styles.container}>
         <View style={styles.containerfil}>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Anemia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>RF</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>CRP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>CHOL</Text>
      </TouchableOpacity>
    </View>
     
 
          <View style={{ alignItems: 'flex-start' }}>
         
        
          <View style={styles.text}>
          <Text style={styles.note}>High blood glucose levels:</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Foundation name="results" size={15} color="black" style={styles.icon} />
              <Text style={styles.text2}>Dental Surgeon</Text>
            </View>
          </View>
          
          
          <View style={styles.text}>
          <Text style={styles.note}>Result :</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Foundation name="results" size={15} color="black" style={styles.icon} />
              <Text style={styles.text2}>32.5</Text>
            </View>
          </View>
          
          <View style={styles.text}>
          <Text style={styles.note}>Normal Range:</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Foundation name="results" size={15} color="black" style={styles.icon} />
              <Text style={styles.text2}>35</Text>
            </View>
          </View>
          <View style={styles.text}>
          <Text style={styles.note}>Biography</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
             
              <Text style={styles.text2 }>Elevated blood glucose levels may indicate diabetes
 or prediabetes. This can be diagnosed through
 a fasting blood glucose test or an oral glucos  Read More</Text>
            </View>
          </View>
          
          
         
         
        
          </View>
          <View style={styles.date}>
            <Text style={styles.join}>previous results</Text>
          </View>
        </View>
      
  
  );
};

const styles = StyleSheet.create({
  container: {
        marginTop: 90,
        marginBottom: 20,
        
        },
        icon: {
            marginRight: 10, // Adjust as needed for the desired spacing between the icon and text
          },
  card: {
    width: 400,
    backgroundColor: '#efefef',
    borderRadius: 8,
    alignItems: 'center',
    padding: 50,
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
  note: {
    fontSize: 22,
    fontWeight: 'bold',
padding:10,

  },
  idd: {
    fontSize: 14,
    fontWeight: '600',
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
    marginLeft: 10,
    
  },
 
  icon: {
    
  padding:10,
    
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
    marginLeft:150,
    backgroundColor:"#566D8F",
    color:"#fff",
    alignItems:"center"

  },
  containerfil: {
    
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
  buttonText: {
    fontWeight: 'bold',
    color: '#566D8F',
  },
  text2: {
    color: 'rgba(8, 12, 47, 0.65)',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 12, // 100%
    letterSpacing: 0.24,
    alignItems: 'flex-start',

  },

});

export default DetailLabResults ;
