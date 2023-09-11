import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, Ionicons,MaterialIcons } from "@expo/vector-icons";

//Screens
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomePage from "./screens/HomePage";
import ProfileScreen from "./screens/ProfileScreen";
import PatientProfileScreen from "./screens/PatientProfileScreen";
import LabResults from "./screens/LabResults";
import XRayResults from "./screens/XRayResults";
import Myvisit from "./screens/Myvisit";
import Surgery from "./screens/Surgery";
import AllDoctors from "./screens/AllDoctors";
import Allergy from "./screens/Allergy";
import Medication from "./screens/Medication";
import DetailXRay from "./screens/DetailXRay ";
import DetailLabResults from "./screens/DetailLabResults";
import DetailSurgery from "./screens/DetailSurgery";
import { NavigationContainer } from '@react-navigation/native';


const StackNavigator = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: "Home",
            backgroundColor: "black",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={30} color="#566D8F" />
              ) : (
                <AntDesign name="home" size={30} color="#566D8F" />
              ),
          }}
        />
       <Tab.Screen
            name="Profile"
            component={PatientProfileScreen}
            options={{
              tabBarLabel: "Profile",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          />
       <Tab.Screen
            name="LabResults"
            component={LabResults}
            options={{
              tabBarLabel: "LabResults",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          />
       <Tab.Screen
            name="XRayResults"
            component={XRayResults}
            options={{
              tabBarLabel: "XRayResults",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          />
       {/* <Tab.Screen
            name="Myvisit"
            component={Myvisit}
            options={{
              tabBarLabel: "Myvisit",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          /> */}
       {/* <Tab.Screen
            name="Surgery"
            component={Surgery}
            options={{
              tabBarLabel: "Surgery",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          /> */}
       <Tab.Screen
            name="AllDoctors"
            component={AllDoctors}
            options={{
              tabBarLabel: "AllDoctors",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          />
       <Tab.Screen
            name="Allergy"
            component={Allergy}
            options={{
              tabBarLabel: "Allergy",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          />
       <Tab.Screen
            name="Medication"
            component={Medication}
            options={{
              tabBarLabel: "Medication",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          />
       {/* <Tab.Screen
            name="DetailXRay"
            component={DetailXRay}
            options={{
              tabBarLabel: "DetailXRay",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          /> */}
       {/* <Tab.Screen
            name="DetailLabResults"
            component={DetailLabResults}
            options={{
              tabBarLabel: "DetailLabResults",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          /> */}
       <Tab.Screen
            name="DetailSurgery"
            component={DetailSurgery}
            options={{
              tabBarLabel: "DetailSurgery",
              tabBarLabelStyle: { color: "black" },
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={30} color="#566D8F" />
                ) : (
                  <Ionicons name="person-outline" size={30} color="#566D8F" />
                ),
            }}
          />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LabResults"
          component={LabResults}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Surgery"
          component={Surgery}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Medication"
          component={Medication}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Allergy"
          component={Allergy}
          options={{ headerShown: false }}
        />
       
        <Stack.Screen
          name="XRayResults"
          component={XRayResults}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Myvisit"
          component={Myvisit}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllDoctors"
          component={AllDoctors}
          options={{ headerShown: false }}
        />
        
       
   
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
