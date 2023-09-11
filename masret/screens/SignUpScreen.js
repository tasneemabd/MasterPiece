import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import { Svg, Image } from 'react-native-svg';
import Untitled from '../assets/dg.png';
export default function SignUpScreen() {
  const navigation = useNavigation(); // Use the navigation hook

  const [email, setEmail] = useState('');
  const [name, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function registerUser() {
    try {
      const response = await fetch('http://192.168.1.179:5000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.status === 'ok') {
        alert('Registration successful');
        navigation.navigate('Login')

      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Network request failed');
    }
  }
  return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.cardBody}>
//           <View style={styles.header}>
//             <Text style={styles.headerText}>Sign Up</Text>
//             <Text style={styles.subHeaderText}>Register with an Email</Text>
//           </View>
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Full Name"
//             value={name}
//             onChangeText={(text) => setFullName(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Phone"
//             value={phone}
//             onChangeText={(text) => setPhone(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             secureTextEntry
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Confirm Password"
//             secureTextEntry
//             value={confirmPassword}
//             onChangeText={(text) => setConfirmPassword(text)}
//           />
//           <TouchableOpacity style={styles.loginButton} onPress={registerUser}>
//             <Text style={styles.loginButtonText}>Sign Up</Text>
//           </TouchableOpacity>
//           <View style={styles.signup}>
//             <Text style={styles.signupText}>
//               Already Signed up?{' '}
//               <Text style={styles.signupLink}>Login</Text>
//             </Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }


<View style={styles.container}>
<Svg width="100%" height={200}>
<Image href={Untitled} width="100%" height="100%" />
</Svg>
<View style={styles.card}>
<View style={styles.cardBody}>
  <View style={styles.header}>
    <Text style={styles.headerText}>Sign Up</Text>
    <Text style={styles.subHeaderText}>Register with an Email</Text>
  </View>
  <TextInput style={styles.input} placeholder="Card ID" />
  <TextInput style={styles.input} placeholder="Full Name" 
    value={name}
    onChangeText={(text) => setFullName(text)}
  />
  <TextInput style={styles.input} placeholder="Phone"
  value={phone}
  onChangeText={(text) => setPhone(text)}
  />
  <TextInput style={styles.input} placeholder="Password" secureTextEntry 
    value={password}
    onChangeText={(text) => setPassword(text)}/>
  <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry 
  value={confirmPassword}
  onChangeText={(text) => setConfirmPassword(text)} />
  
  <TouchableOpacity style={styles.loginButton} onPress={registerUser}>
    <Text style={styles.loginButtonText}>Sign Up</Text>
  </TouchableOpacity>
  <View style={styles.socialIcons}>
    {/* <FontAwesomeIcon name="facebook" size={24} color="white" />
    <FontAwesomeIcon name="twitter" size={24} color="white" style={styles.iconSpacing} />
    <FontAwesomeIcon name="google" size={24} color="white" /> */}
  </View>
  <View style={styles.signup}>
     <TouchableOpacity onPress={() => navigation.navigate('Login')}>
     <Text style={styles.signupText}>Already Signed up? <Text style={styles.signupLink}>Login</Text></Text>
  </TouchableOpacity>
  </View>
</View>
</View>
</View>
);
}

const styles = {
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#FFF',
},
card: {
borderRadius: 16,
backgroundColor: '#FFF',
width: '90%',
maxWidth: 400,
},
cardBody: {
padding: 20,
},
header: {
marginBottom: 20,
},
headerText: {
fontWeight: 'bold',
fontSize: 24,
color: '#566D8F',
textTransform: 'uppercase',
padding:20,

},
subHeaderText: {
color: '#566D8F',
},
input: {
backgroundColor: 'transparent',
borderColor: '#566D8F',
borderWidth: 1,
borderRadius: 8,
borderBottomColor: '#566D8F', // Set the border color for the bottom border
borderWidth: 0, // Set border width to 0 for top, left, and right
borderBottomWidth: 1, // Set border width for the bottom    paddingVertical: 10,
paddingHorizontal: 16,
marginBottom: 20,
padding:10,
color: '#566D8F',
},
forgotPassword: {
marginBottom: 16,
},
forgotPasswordText: {
color: '#566D8F',
},
loginButton: {
backgroundColor: '#566D8F',
borderColor: '#566D8F',
borderWidth: 1,
borderRadius: 30,
paddingVertical: 14,

alignItems: 'center',
marginBottom: 16,
},
loginButtonText: {
color: '#FFF',
fontWeight: 'bold',
fontFamily: 'Arial',

fontSize: 16,
},
socialIcons: {
flexDirection: 'row',
justifyContent: 'center',
marginBottom: 16,
},
iconSpacing: {
marginHorizontal: 20,
},
signup: {
justifyContent: 'center',
alignItems: 'center',
},
signupText: {
color: '#566D8F',
},
signupLink: {
fontWeight: 'bold',
color: '#566D8F',
},
svgImage: {
width: '100%',
height: 300,
},
};