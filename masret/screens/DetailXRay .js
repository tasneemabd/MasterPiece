import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const DetailXRay  = () => {
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
          <Text style={styles.name}> Suspected wrist fracture</Text>
          <View style={styles.dFlex}>
          <EvilIcons name="location" size={24} color="#566D8F" />
            <Text style={styles.idd1} >Specialty Hospital Clinics</Text>
            <MaterialIcons name="date-range" size={24} color="#566D8F" />
            <Text style={styles.idd1}>Sunday, 12 June</Text>
            <TouchableOpacity>
              <Text>
                <Text>
                  {/* <i className="fa fa-copy"></i> */}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
          
        
          <View style={styles.text}>
          <Text style={styles.note}> Note:</Text>

            <Text >
            The X-ray images would help determine if there is a fracture, the type of fracture 
            ( distal radius fracture), and its extent (displaced ).  
              appropriate treatment plan, which might include immobilization with a cast, splinting,
                    </Text>
          </View>
          <View style={styles.icons}>
            <Text>
              <Text>
              
              </Text>
              <Text>
                
              </Text>
              <Text>
              
              </Text>
              <Text>
             
              </Text>
            </Text>
          </View>
          <View style={styles.date}>
            <Text style={styles.join}>Joined May, 2021</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        marginTop: 20,
        marginBottom: 20,
        padding: 50,
    alignItems: 'center',
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
marginLeft:-260,
padding:25,

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
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  },
  join: {
    fontSize: 14,
    color: '#a0a0a0',
    fontWeight: 'bold',
  },
  date: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    marginTop: 16,
    padding: 8,
  },
});

export default DetailXRay ;
