import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground ,TouchableOpacity } from 'react-native';
import Bar from "./Bar"
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

const Medication = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  return (
    
    <>
    
    <Bar/>
    <View style={styles.containerfil}>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Month</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Year</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.medicationContentBox}>
      <View style={styles.medicationHeaderImage}>
        <View style={styles.medicationHeader}>
          <Text style={styles.aspirinText}>Aspirin</Text>
          <View style={styles.frameContainer}>
            <Text style={styles.medicationInfo}>
              ASS, 500mg
              {/* {'\n'} */}
              BAYER, über-zogene Tab-letten
            </Text>
            <Text style={styles.xDailyText}>2x Daily</Text>
          </View>
        </View>
       

        <ImageBackground
          source={{
            uri: 'https://medicinaonline.ae/cdn/shop/products/Aspirin-Protect-90_s.jpg?v=1612788978',
          }}
          style={styles.assImage}
          />
          </View>
      
      <View style={styles.remindersFab}>
        <View style={styles.reminders}>
          <View style={styles.remindersHeaderIcon}>
          <MaterialCommunityIcons name="bell" size={18} color="#556C77" />
            

            <Text style={styles.remindersText}>Reminders</Text>
          </View>
          <Text style={styles.remindersInput}>6:00, 22:00</Text>
        </View>
       <View style={styles.smallFab}>

        <Entypo name="check" size={24} color="#556C77" />
       </View>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    medicationContentBox: {
        marginTop:20,
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 20,
      shadowColor: '#dadada',
      shadowOffset: { width: 0, height: 0.1 },
      shadowOpacity: 0.3,
      width: '94%',
      flexDirection: 'column',
      overflow: 'hidden',
      
      padding: 40,
      marginLeft:12,
     
    },
    medicationHeaderImage: {
      alignItems: 'center',
      flexDirection: 'row',
      flexShrink: 0,
      height: 119,
      marginBottom: 31,
      width: '100%',
    },
    medicationHeader: {
      flexShrink: 0,
      height: 'calc(100% - 11px)',
      margin: '0.55rem 2.5rem 0.55rem 0rem',
      width: 109,
    },
    aspirinText: {
      color: '#003f5f',
      fontFamily: 'Poppins, "Source Sans Pro"',
      fontSize: 18,
      fontWeight: '600',
      letterSpacing: 0.05,
      lineHeight: 24,
      marginBottom: 13,
    },
    frameContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    medicationInfo: {
      color: '#003f5f',
      display: 'flex',
      flexShrink: 0,
      fontFamily: 'Poppins, "Source Sans Pro"',
      fontSize: 12,
      fontWeight: '400',
      letterSpacing: 0.05,
      lineHeight: 19.2,
      marginBottom: 14.4,
      maxWidth: 109,
    },
    xDailyText: {
      color: '#003f5f',
      display: 'flex',
      flexShrink: 0,
      fontFamily: 'Poppins, "Source Sans Pro"',
      fontSize: 12,
      fontWeight: '700',
      letterSpacing: 0.05,
      lineHeight: 19.2,
      whiteSpace: 'nowrap',
    },
    assImage: {
      backgroundColor: '#F0F0F0',
      backgroundSize: '100% 100%',
      borderRadius: 22,
      flexShrink: 0,
      height: 119,
      width: 114,
      marginLeft:90,
      position:"relative",
   
    },
    remindersFab: {
      alignItems: 'flex-end',
      flexDirection: 'row',
      flexShrink: 0,
      height: 56,
      width: '100%',
    },
    reminders: {
      flexShrink: 0,
      height: '100%',
      marginRight: 95,
      width: 113,
    },
    remindersHeaderIcon: {
      alignItems: 'center',
      boxSizing: 'border-box',
      flexDirection: 'row',
      margin: '0rem 3.8rem 0.8rem 0rem',
      paddingLeft: 2,
      width: 'calc(100% - 3.8rem)',
    },
    bellImage: {
      flexShrink: 0,
      height: 12,
      marginRight: 6,
      objectFit: 'contain',
      verticalAlign: 'top',
      width: 10.5,
    },
    remindersText: {
      color: '#003f5f',
      display: 'flex',
      flexShrink: 0,
      fontFamily: 'Poppins, "Source Sans Pro"',
      fontSize: 12,
      fontWeight: '400',
      letterSpacing: 0.05,
      lineHeight: 24,
      whiteSpace: 'nowrap',
    },
    remindersInput: {
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderColor: '#4b454d',
      borderWidth: 0.05,
      boxSizing: 'border-box',
      color: '#003f5f',
      display: 'flex',
      fontFamily: 'Poppins, "Source Sans Pro"',
      fontSize: 18,
      fontWeight: '600',
      height: 24,
      justifyContent: 'center',
      letterSpacing: 0.05,
      lineHeight: 32,
      whiteSpace: 'nowrap',
      width: '100%',
    },
    smallFab: {
      borderRadius: 12,
    backgroundColor: '#FFF', // You can replace this with your color or variable
    elevation: 5, 
      
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:40,
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
  });
  
  export default Medication;