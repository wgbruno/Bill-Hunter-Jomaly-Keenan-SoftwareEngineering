import React, {useState, useEffect} from "react";
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet, SafeAreaView } from 'react-native';
import AddPlayer from "./View/AddPlayer.js";
import Home from "./View/Home.js";
import ViewAllPlayers from "./View/ViewAllPlayers.js";
import FormStyle from "./Style/Form.style";
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';
import { openDatabase } from "react-native-sqlite-storage";

const AppNavigator = createStackNavigator(  
  {  
      HomeScreen: Home,  
      PlayerReg: AddPlayer,
      ViewPlayers: ViewAllPlayers 
  },  
  {  
      initialRouteName: "HomeScreen"  
  }  
); 
const AppContainer = createAppContainer(AppNavigator); 
export default class App extends React.Component{
  render(){
    return < AppContainer/>;
  }
}